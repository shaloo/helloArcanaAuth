import { ethers } from "hardhat";
/*
import { AuthProvider } from '@arcana/auth';
*/

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = ethers.utils.parseEther("1");

  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();

  console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`);

/*
  const auth = new AuthProvider('52');

  const Name = process.env.NFT_COLLECTION_NAME || "MI9",
  Symbol = process.env.NFT_COLLECTION_SYMBOL || "MI9";
*/

  /*
   * Initialize the AuthProvider
  */
/*
  await auth.init({
    appMode: 2,
    position: "right",
  });
  let an_provider = auth.getProvider();
*/
  /*
   * Get the Signer
   */
/*  const provider = new ethers.providers.Web3Provider(an_provider);
  const signer = provider.getSigner();

  // We get the contract to deploy
  const AERC721_factory = await hre.ethers.getContractFactory("AERC721");
  await AERC721_factory.connect( signer )
  console.log("Arcana wallet address:", await signer.getAddress());
  const AERC721 = await AERC721_factory.deploy(Name, Symbol, signer);
  await AERC721.deployed();
  console.log("NFT Contract deployed to:", AERC721.address);
*/
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
