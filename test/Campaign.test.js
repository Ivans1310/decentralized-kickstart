const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

compiledFactory = require("../ethereum/build/CampaignFactory.json");
compiledCampaign = require("../ethereum/build/Campaign.json");

let accounts;
let factory;
let campaign;
let campaignAddress;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  await factory.methods.createCampaign("100").send({
    from: accounts[0],
    gas: "1000000",
  });
  // Take the first array element and assigned it to campaignAddress
  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

  // Create the new instance with the contract already deployed.
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
});

describe("Campaigns", () => {
  it("deploys a factory and a campaign", () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });
  it("Marks caller as the campaign manager", async () => {
    const manager = await campaign.methods.manager().call();
    assert.strictEqual(accounts[0], manager);
  });

  it("allows people to contribute money and marks them as a approvers", async () => {
    await campaign.methods.contribute().send({
      value: "200",
      from: accounts[1],
    });
    const isContributor = await campaign.methods.approvers(accounts[1]);
    assert(isContributor);
  });

  it("requires a minimun contribution", async () => {
    try {
      await campaign.methods.contribute().send({
        value: "99",
        from: accounts[1],
      });
      assert(false);
    } catch (error) {
      assert(error);
    }
  });

  it("allow to manager to make a payment request", async () => {
    await campaign.methods
      .createRequest("Buy Baterries", 45, accounts[1])
      .send({ from: accounts[0], gas: "1000000" });

    const request = await campaign.methods.requests(0).call();
    assert.strictEqual("Buy Baterries", request.description);
  });

  it("process requests", async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei("10", "ether"),
    });

    let balance_b = await web3.eth.getBalance(accounts[1]);
    balance_b = parseFloat(web3.utils.fromWei(balance_b, "ether"));

    await campaign.methods
      .createRequest("A", web3.utils.toWei("5", "ether"), accounts[1])
      .send({ from: accounts[0], gas: "1000000" });

    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: "1000000",
    });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: "1000000",
    });

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = parseFloat(web3.utils.fromWei(balance, "ether"));
    const final_balance = balance - balance_b;
    console.log("final_balance:", final_balance);
    assert(final_balance == 5);
  });
});
