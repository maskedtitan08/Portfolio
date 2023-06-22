require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path : './.env'});

const private_key=process.env.PRIVATE_KEY
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {},
    mumbai: {
      url: process.env.RPC_URL,
      accounts: [private_key],
    },
    
  },
  paths: {
    artifacts: "./frontend/src/artifacts", // this paths is used to define the folder where our btyecode and abi will be generated (it will be helpful in importing .json file for abi )
  },
};


