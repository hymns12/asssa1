import { ethers } from "hardhat";

async function main() {
  const CalculatorFactory = await ethers.deployContract("CalculatorFactory");
  await CalculatorFactory.waitForDeployment();

  console.log( `CalculatorFactory deployed to ${CalculatorFactory.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
