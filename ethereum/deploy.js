var envJSON = require("../.env");
const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const campaignFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "Add here the HD_WALLET PROVIDER SEED",
  "https://rinkeby.infura.io/v3/65f22c55e7ec47e1b76ce3dd780166aa"
);

console.log(process.env);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("These are the accounts", accounts);

  const result = await new web3.eth.Contract(
    JSON.parse(campaignFactory.interface)
  )
    .deploy({ data: campaignFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });
  console.log("Contract deployed to ", result.options.address);
};
deploy();

// 24/10/2020 : campaingFactory Address 0xC6B4FF86423221398a4b39A2D69E08871587b7b1
