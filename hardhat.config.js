require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks:{
    goerli:{
      url: process.env.ALCHEMY_TESTNET_URL,
      accounts: [process.env.TESTNET_PRIVATE_KEY],
    },
    bscTestnet: { // Add a new network configuration for BSC Testnet
      url: process.env.BSC_TESTNET_URL, // Replace with your BSC Testnet URL
      accounts: [process.env.TESTNET_PRIVATE_KEY], // Replace with your BSC Testnet private key
      chainId: 97, // Chain ID for BSC Testnet
    },
  },
};
