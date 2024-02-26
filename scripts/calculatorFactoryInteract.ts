import { ethers } from "hardhat";

async function main() {
  const CalculatorFactoryAddress = "0xEAe2C002020797B0d530B0b1f3979A1f6AB34A9f";
  const CalculatorFactory = await ethers.getContractAt("ICalculatorFactory", CalculatorFactoryAddress);

  const calculatorTx = await CalculatorFactory.createCalculator();
  await calculatorTx.wait();

  const clones = await CalculatorFactory.getCalculatorClones();
  console.log(clones)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});