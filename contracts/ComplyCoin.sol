// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "hardhat/console.sol";

contract ComplyCoin is ERC20, ERC20Burnable, Pausable{
    
    address public owner;
    address public market;

    modifier onlyOwner{
        require(msg.sender == owner || msg.sender == market, "Not allowed");
        _;
    }

    constructor() ERC20("ComplyCoin", "CC") {
        _mint(msg.sender, 100);
        owner = msg.sender;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }
    function setMarketAddress(address _address) public onlyOwner{
        market = _address;
    }
    function getMarketAddress() public view returns (address){
        return market;
    }


}