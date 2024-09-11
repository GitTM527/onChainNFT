require("@nomicfoundation/hardhat-toolbox");
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    sepolia: {
        url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
        accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
      apiKey:{
        sepolia: [process.env.ETHERSCAN_API_KEY],
      },
  },

};
