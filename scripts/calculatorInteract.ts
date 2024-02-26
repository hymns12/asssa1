import { ethers } from "hardhat";

const main = async () => {
    const calculatorAddress = "0x694bb71a6aEA03bA2Cd3C01243773247c0089838";
    const Calculator = await ethers.getContractAt("ICalculator", calculatorAddress);

    const addtx= await Calculator.add2Numbers(4, 5);
    addtx.wait();

    const resultAddtx= await Calculator.getAddResult();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

//Transaction HAsh: 0x48a0ec809cc9eba8c7e146daec9e4e4d7135be871a8bb72d630647ddbacfd2a4