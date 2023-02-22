import { ethers } from "hardhat";

async function main() {

  const priceFeedAddress = "0xECe365B379E1dD183B20fc5f022230C044d51404"; // Rinkeby BTC/USD Price Feed
  const PriceConsumerV3 = await ethers.getContractFactory("PriceConsumerV3");
  const priceConsumer = await PriceConsumerV3.deploy(priceFeedAddress);

  await priceConsumer.deployed();
  console.log("PriceConsumerV3 deployed to:", priceConsumer.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
