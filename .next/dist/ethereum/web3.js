"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Here we are getting the web3 injected on the browser by Metamask.

var OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5
};

var web3 = "";
// Verify if the explorer has Metamask installed
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  web3 = new _web2.default(window.ethereum, null, OPTIONS);
  window.ethereum.enable();
} else {
  // We are on the server or the user has not installed Metamask
  console.log("||||||||||||||||||||||||||Here infura provider");
  var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/65f22c55e7ec47e1b76ce3dd780166aa");
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJPUFRJT05TIiwiZGVmYXVsdEJsb2NrIiwidHJhbnNhY3Rpb25Db25maXJtYXRpb25CbG9ja3MiLCJ0cmFuc2FjdGlvbkJsb2NrVGltZW91dCIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7Ozs7O0FBRVA7O0FBRUEsSUFBTTtnQkFBVSxBQUNBLEFBQ2Q7aUNBRmMsQUFFaUIsQUFDL0I7MkJBSEYsQUFBZ0IsQUFHVztBQUhYLEFBQ2Q7O0FBS0YsSUFBSSxPQUFKLEFBQVc7QUFDWDtBQUNBLElBQUksT0FBQSxBQUFPLFdBQVAsQUFBa0IsZUFBZSxPQUFPLE9BQVAsQUFBYyxhQUFuRCxBQUFnRSxhQUFhLEFBQzNFO1NBQU8sQUFBSSxrQkFBSyxPQUFULEFBQWdCLFVBQWhCLEFBQTBCLE1BQWpDLEFBQU8sQUFBZ0MsQUFDdkM7U0FBQSxBQUFPLFNBQVAsQUFBZ0IsQUFDakI7QUFIRCxPQUdPLEFBQ0w7QUFDQTtVQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7TUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsYUFBcEMsQUFBaUIsQUFDZixBQUVGO1NBQU8sQUFBSSxrQkFBWCxBQUFPLEFBQVMsQUFDakI7QUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkU6L0RvY3VtZW50cyBJdmFuL0NvdXJzZXMvRXRoZXJldW0gYW5kIHNvbGlkaXR5IGNvdXJzZSBTdGVwaGVuL2RlY2VudHJhbGl6ZWQta2lja3N0YXJ0In0=