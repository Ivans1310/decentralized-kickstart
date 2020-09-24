const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
// Remove the build folder.
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf-8");

// Compile the contracts
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);
console.log(output);
for (let contract in output) {
  fs.outputJSONSync(
    // create two json files with the source of each contract
    // WE get the interface and the ABI.
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
