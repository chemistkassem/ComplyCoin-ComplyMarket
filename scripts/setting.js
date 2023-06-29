
const COIN = "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0";
const Market = "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82";
const Owner_key = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const Other_key = "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";



const { ethers } = require("hardhat");

const contract = require("../artifacts/contracts/ComplyCoin.sol/ComplyCoin.json");
const contractMarket = require("../artifacts/contracts/ComplyMarket.sol/ComplyMarket.json");


async function main(){
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");

    const owner = new ethers.Wallet(Owner_key, provider);
    const ownerAddress = owner.address;

    const other = new ethers.Wallet(Other_key, provider);
    const otherAddress = other.address;

    const tokenContract = new ethers.Contract(COIN, contract.abi, owner);
    const marketContract = new ethers.Contract(Market, contractMarket.abi, owner);
    
    let OwnerNonce = await owner.getNonce();
    let OtherNonce = await other.getNonce();

    console.log(`Owner Nonce: ${OwnerNonce}`);
    console.log(`Other Nonce: ${OtherNonce}`);

    const ownerBalance = await tokenContract.balanceOf(ownerAddress,{
        nonce: OwnerNonce,
    });
    console.log(`Before: ${ownerBalance}`);

    OwnerNonce = await owner.getNonce();
    console.log(`Owner before setMarket Nonce: ${OwnerNonce}`);
    await tokenContract.connect(owner).setMarketAddress(Market,{
        nonce: OwnerNonce,
    });
    OwnerNonce = await owner.getNonce();
    console.log(`Owner after setToken Nonce: ${OwnerNonce}`);
    await marketContract.connect(owner).setTokenAddress(COIN,{
        nonce: OwnerNonce+1,
    });


    const marketaddressFromCoin = await tokenContract.getMarketAddress()
    console.log(`Market address from Coin Address : ${marketaddressFromCoin}`);
    console.log(`After: ${ownerBalance}`);
    

    // const balance = await tokenContract.balanceOf(walletAddress);
    // console.log(`Balance: ${ethers.utils.formatEther(String(balance))}`);

    // const sendTokenToSmartContract = await tokenContract.transfer(crazyflip_ADDRESS, ethers.utils.parseEther('10'));
    // console.log(sendTokenToSmartContract);

    // const balance1 = await tokenContract.balanceOf(walletAddress);
    // console.log(`Balance: ${ethers.utils.formatEther(String(balance1))}`);

    // const allow = await tokenContract.approve(crazyflip_ADDRESS, ethers.utils.parseEther('10'))
    // const recipt = await allow.wait();

    
    // const allowance = await tokenContract.allowance(walletAddress, crazyflip_ADDRESS);
    // console.log(`Allowance: ${ethers.utils.formatEther(String(allowance))}`);

    // console.log("TRANSFERING LINK");

    // const linkContract = new ethers.Contract(link_ADDRESS, contract, signer);
    // const sendLinkToSmartContract = await linkContract.transfer(crazyflip_ADDRESS, ethers.utils.parseEther('5'));
    // console.log(sendLinkToSmartContract);


}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });