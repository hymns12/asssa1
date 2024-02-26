import { ethers } from "hardhat";

async function main() {
  const spiderFarc = await ethers.deployContract("spiderFarc");
  await spiderFarc.waitForDeployment();

  console.log( `spiderFarc deployed to ${spiderFarc.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
