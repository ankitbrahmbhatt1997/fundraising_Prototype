const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const campaignCreator = require("./Build/CampaignFactory.json");

let provider = new HDWalletProvider(
  "", // use your testnet account private key
  "https://rinkeby.infura.io/v3/bb20540179824ccb94cf748904d43090" // Use link provided by infura
);

const web3 = new Web3(provider);

const deploy = async () => {
  let accounts = await web3.eth.getAccounts();
  console.log(accounts);

  console.log("attempting to deploy the contract from account", accounts[0]);

  let result = await new web3.eth.Contract(
    JSON.parse(campaignCreator.interface)
  )
    .deploy({ data: "0x" + campaignCreator.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to address ", result.options.address);
};
deploy();
