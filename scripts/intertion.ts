import { ethers } from "hardhat";

// txhash: 0xe63303a54667158fa7454e42b8acdf4a7cf62410b0dbed1a6c4c930a1a75275e

const main = async () => {

    const CalculatorFactory = await ethers.getContractFactory("CalculatorFactory");
    
    const calculatorFactory = CalculatorFactory.attach("0xEa9680Be97B35e1a0B0F6791cd0CCD6a81d3b191");


    const createCalculatorTxn = await calculatorFactory.createCalculatorInstance(50);
    await createCalculatorTxn.wait()
    
  console.log(createCalculatorTxn)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});