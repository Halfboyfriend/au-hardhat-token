
const hre = require("hardhat");
require('dotenv').config();

async function main() {
  const url = process.env.BSC_TESTNET_URL;

  let artifacts = await hre.artifacts.readArtifact('Appleween');
  const provider = new hre.ethers.providers.JsonRpcProvider(url);

  let privateKey = process.env.TESTNET_PRIVATE_KEY;

  let wallet = new hre.ethers.Wallet(privateKey, provider);

  let factory = new hre.ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);
  
  console.log('DEPLOYING NOW')

  let faucet = await factory.deploy('0x10ED43C718714eb63d5aA57B78B54704E256024E', {
    gasLimit: 5000000,
  });

  console.log(`Faucet address: ${faucet.address}`);
  await faucet.deployed();
  console.log('DEPLOYED')

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
