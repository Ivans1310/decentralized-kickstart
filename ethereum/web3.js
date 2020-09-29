import Web3 from "web3";

// Here we are getting the web3 injected on the browser by Metamask.

const OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5,
};

let web3 = "";
// Verify if the explorer has Metamask installed
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  web3 = new Web3(window.ethereum, null, OPTIONS);
  window.ethereum.enable();
} else {
  // We are on the server or the user has not installed Metamask
  console.log("||||||||||||||||||||||||||Here infura provider");
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/65f22c55e7ec47e1b76ce3dd780166aa"
  );
  web3 = new Web3(provider);
}

export default web3;
