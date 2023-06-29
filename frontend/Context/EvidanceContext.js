import React, { useState, useEffect, useContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

//INTERNAL  IMPORT
import {
	coinABI,
	CoinAddress,
	marketABI,
	MarketAddress
} from "./constants";

//---FETCHING SMART CONTRACT
const fetchContract = async (signerOrProvider, type) => {
	if(type === "coin") return new ethers.Contract(CoinAddress,
		coinABI,
		signerOrProvider
	);
	if(type === "market") return new ethers.Contract(MarketAddress,
		marketABI,
		signerOrProvider
	);
};

//---CONNECTING WITH SMART CONTRACT
const connectingWithSmartContract = async (type) => {
	try {
		const web3Modal = new Web3Modal();
		const connection = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner();
		const contract = await fetchContract(signer, type);
	
		return [contract,signer];
	} catch (error) {
		console.log("Something went wrong while connecting with contract", error);
	}
};

export const EvidanceContext = React.createContext();

export const EvidanceProvider = ({ children }) => {
	const titleData = "Future of Shopping with our AI NFT Marketplace";

	//------USESTAT
	const [error, setError] = useState("");
	const [currentAccount, setCurrentAccount] = useState("");
	const [accountBalance, setAccountBalance] = useState("");

	const [loading, setLoading] = useState(false);

	//---CHECK IF WALLET IS CONNECTD
	const checkIfWalletConnected = async () => {
		try {
			if (!window.ethereum) return setError("Install MetaMask");

			const accounts = await window.ethereum.request({
				method: "eth_accounts",
			});

			if (accounts.length) {
				setCurrentAccount(accounts[0].toLowerCase());
				// const provider = new ethers.providers.Web3Provider(window.ethereum);
				
				const trx = await connectingWithSmartContract("coin");
				const contract = trx[0];
				const signer = trx[1];
				const getBalance = await contract.balanceOf(accounts[0]);
				setAccountBalance(getBalance);
			} else {
				setError("No Account Found");
			}
		} catch (error) {
			setError("Something wrong while connecting to wallet");
		}
	};
	
	useEffect(() => {
		checkIfWalletConnected();
	}, []);

	useEffect(() => {
		if (!currentAccount) return;
	}, [currentAccount]);

	//---CONNET WALLET FUNCTION
	const connectWallet = async () => {
		try {
			if (!window.ethereum) return setError("Install MetaMask");

			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			setCurrentAccount(accounts[0].toLowerCase());
		} catch (error) {
			setError("Error while connecting to wallet");
		}
	};


	// ---- Create Compilance

	const createEvidence = async() =>{
		try{
			console.log("create evidence")
			if(currentAccount){
				
				
				
				const trx = await connectingWithSmartContract("market");
				const contract = trx[0];
				const signer = trx[1];
				
				const createEvidence = await contract.createEvidence();
				console.log(createEvidence);
			}
		}catch(error){
			console.log(error);
			setError("Error while creating evidence");
		}
	}

	const getAllEvidence = async() =>{
		try{
			if(currentAccount){
				const trx = await connectingWithSmartContract("market");
				const contract = trx[0];
				const signer = trx[1];
				const getEvidence = await contract.getAllEvidence();
				return getEvidence;
			}
		}catch(error){
			setError("Error while creating evidence");
		}
	}
	
	const approveEvidence = async(id) =>{
		try{
			if(currentAccount){
				const trx = await connectingWithSmartContract("market");
				const contract = trx[0];
				const signer = trx[1];
				const approveEvidence = await contract.approveEvidence(id);
				await approveEvidence.wait();
				console.log(approveEvidence);
			}
		}catch(error){
			setError("Error while creating evidence");
		}
	}

	const createOrder = async(price,details) =>{
		try{
			if(currentAccount){
				const trx = await connectingWithSmartContract("market");
				const contract = trx[0];
				const signer = trx[1];
				
				// const trx = await contractCoin.approve(MarketAddress, price);
				// await trx.wait();

				const createOrder = await contract.createOrder(price,details);
				console.log(createOrder);
			}
		}catch(error){
			setError("Error while creating evidence");
		}
	}

	const getAllOrders = async() =>{
		try{
			if(currentAccount){
				const trx = await connectingWithSmartContract("market");
				const contract = trx[0];
				const signer = trx[1];
				const getOrders = await contract.getAllOrders();
				return getOrders;
			}
		}catch(error){
			setError("Error while creating evidence");
		}
	}

	const acceptOrder = async(id, price) =>{
		try{
			if(currentAccount){
				const trx = await connectingWithSmartContract("market");
				const contract = trx[0];

				const trx3 = await connectingWithSmartContract("coin");
				const contractCoin = trx3[0];

				const trx1 = await contractCoin.approve(MarketAddress, price);
				await trx1.wait();

				const acceptOrder = await contract.acceptOrder(id);
				await acceptOrder.wait();
				console.log(acceptOrder);
			}
		}catch(error){
			setError("Error while creating evidence");
		}
	}


	

	return (
		<EvidanceContext.Provider
			value={{
				checkIfWalletConnected,
				connectWallet,
				currentAccount,
				titleData,
				error,
				loading,
				accountBalance,
				createEvidence,
				getAllEvidence,
				approveEvidence,
				createOrder,
				getAllOrders,
				acceptOrder
			}}
		>
			{children}
		</EvidanceContext.Provider>
	);
};
