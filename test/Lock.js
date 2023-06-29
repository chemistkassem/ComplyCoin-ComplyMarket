const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");


const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Coin = await ethers.getContractFactory("ComplyCoin");
    const coin = await Coin.deploy();

    const Market = await ethers.getContractFactory("ComplyMarket");
    const market = await Market.deploy();

    // 

    return { coin, market, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set coin address in market", async function () {
      const { coin, market, owner, otherAccount } = await loadFixture(deployOneYearLockFixture);

      const tokenAddress = await coin.getAddress();
      const marketAddress = await market.getAddress();

      await coin.connect(owner).setMarketAddress(marketAddress);

      await market.connect(owner).setTokenAddress(tokenAddress);
      
    

      const add = await market.connect(owner).getTokenAddress();
      const addMarket = await coin.connect(owner).getMarketAddress();

      await market.connect(otherAccount).createEvidence();

      await market.connect(owner).approveEvidence(0);

      const balance = await coin.balanceOf(otherAccount.address);
      const totalSupply = await coin.totalSupply();



      expect(add).to.equal(tokenAddress);
      expect(addMarket).to.equal(marketAddress);


      expect(balance).to.equal(1);
    });
    it("Should create the order", async function () {
      const { coin, market, owner, otherAccount } = await loadFixture(deployOneYearLockFixture);

      const tokenAddress = await coin.getAddress();
      const marketAddress = await market.getAddress();

      await coin.connect(owner).setMarketAddress(marketAddress);

      await market.connect(owner).setTokenAddress(tokenAddress);
      
    

      const add = await market.connect(owner).getTokenAddress();
      const addMarket = await coin.connect(owner).getMarketAddress();

      await market.connect(owner).createOrder(2);
      

      await coin.connect(owner).mint(otherAccount.address, 10);

      await market.connect(otherAccount).createOrder(0);
      
      
      
      
      await coin.connect(otherAccount).approve(marketAddress, 2);

      await market.connect(otherAccount).acceptOrder(0);


      const balance = await coin.balanceOf(otherAccount.address);

      const createdOrder = await market.connect(otherAccount).orders(0);

      console.log(createdOrder);
      

      expect(balance).to.equal(8);
    });

    
  });

  
});
