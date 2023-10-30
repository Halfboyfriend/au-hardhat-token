// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
require('dotenv').config();

async function main() {
  const url = process.env.ALCHEMY_TESTNET_URL;

  let artifacts = await hre.artifacts.readArtifact('Faucet');
  const provider = new hre.ethers.providers.JsonRpcProvider(url);

  let privateKey = process.env.TESTNET_PRIVATE_KEY;

  let wallet = new hre.ethers.Wallet(privateKey, provider);

  let factory = new hre.ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);
  

  let faucet = await factory.deploy();

  console.log(`Faucet address: ${faucet.address}`);
  await faucet.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
