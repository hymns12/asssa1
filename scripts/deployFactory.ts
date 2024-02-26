import { ethers } from "hardhat";

async function main() {

  const calculatorFactory = await ethers.deployContract("CalculatorFactory");

  await calculatorFactory.waitForDeployment();

  console.log(
   `calculator factory successfully deployed to ${calculatorFactory.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});