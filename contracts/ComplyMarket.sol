// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./ComplyCoin.sol";

contract ComplyMarket is Ownable {
    struct Evidence {
        uint id;
        address creator;
        bool approved;
    }
    struct Order {
        uint id;
        address creator;
        address buyer;
        bool sold;
        uint price;
        string details;
    }

    address private TOKEN_ADDRESS;

    mapping(uint => Evidence) public complianceEvidence;
    mapping(uint => Order) public orders;

    uint public totalEvidences = 0;
    uint public totalOrders = 0;

    ComplyCoin internal _token;

    event CreateEvidence(uint id, address creator);
    event ApproveEvidence(uint id, address creator);

    function createEvidence() external {
        Evidence memory evidence = Evidence(totalEvidences, msg.sender, false);
        complianceEvidence[totalEvidences] = evidence;
        totalEvidences += 1;
        emit CreateEvidence(totalEvidences, msg.sender);
    }

    function approveEvidence(uint _id) external onlyOwner {
        require(!complianceEvidence[_id].approved, "Already approved");
        complianceEvidence[_id].approved = true;
        _token = ComplyCoin(TOKEN_ADDRESS);
        _token.mint(complianceEvidence[_id].creator, 1);
        emit ApproveEvidence(_id, complianceEvidence[_id].creator);
    }

    function getAllEvidence() external view returns (Evidence[] memory) {
        Evidence[] memory evidences = new Evidence[](totalEvidences);
        for (uint i = 0; i < totalEvidences; i++) {
            evidences[i] = complianceEvidence[i];
        }
        return evidences;
    }

    function createOrder(uint _price, string memory _details) external {
        Order memory order = Order(
            totalOrders,
            msg.sender,
            address(0),
            false,
            _price,
            _details
        );
        orders[totalOrders] = order;
        totalOrders += 1;
    }

    function acceptOrder(uint _id) external {
        require(!orders[_id].sold, "Product already sold");
        _token = ComplyCoin(TOKEN_ADDRESS);
        uint256 allowance = _token.allowance(msg.sender, address(this));
        require(allowance >= orders[_id].price, "Insufficient spending amount");
        _token.transferFrom(msg.sender, orders[_id].creator, orders[_id].price); //balance
        orders[_id].sold = true;
        orders[_id].buyer = msg.sender;
    }

    function getAllOrders() external view returns (Order[] memory) {
        Order[] memory _orders = new Order[](totalOrders);
        for (uint i = 0; i < totalOrders; i++) {
            _orders[i] = orders[i];
        }
        return _orders;
    }

    function setTokenAddress(address _tokenAddress) external onlyOwner {
        TOKEN_ADDRESS = _tokenAddress;
    }

    function getTokenAddress() external view returns (address) {
        return TOKEN_ADDRESS;
    }
}
