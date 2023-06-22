const hre = require("hardhat");

async function main() {
  // const Portfolio = await hre.ethers.getContractFactory("Portfolio");
  // const portfolio = await Portfolio.deploy();

  // // await portfolio.deployed();
  // console.log("Library deployed to:", portfolio.address);
  
  const deployedContract = await hre.ethers.deployContract("Portfolio");
  await deployedContract.waitForDeployment();
  console.log("Portfolio Contract Address:", deployedContract.target);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});






