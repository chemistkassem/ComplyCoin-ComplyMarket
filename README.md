# ComplyCoin2023

We are using hardhat for the developement of blockchain part and Nextjs [reactjs] on our front end side

We have created two contracts

1. Comply Coin [token]
2. Comply Marketplace

## ComplyCoin Contract

Its ERC20 token
Admin and Marketplace address will only be able to mint the tokens

## Comply Market Contract

Contract contains the functions which will help in creating evendences and orders on the blockchain
User will have ability to generate an evidence but only admin can approve it when admin accept the evidence creator of evidence will get one token.
User can create a order in the marketplace and set the price and description of order and anyone can accept the order by paying the price with ComplyCoin

## Setup

first go to the directory of the folder and run these commands

1. npm install
2. npm hardhat node [it will run local blockchian on your computer]

## Deploy Contract

to deploy the contract we have a script called deploy.js
to run the script you have to run this command on cmd
npx hardhat run scripts/deploy.js

## setting contract

when you have the address of the smart contracts, you can simply paste it inside the setting.js and run this script by using this command

npx hardhat run scripts/setting.js

## Frontend

go to the frontend directory on your terminal and run the following command
npm install

after the installiion go to Context folder and open constant.js file and update the contract address there

after you change the contract address run the following command

npm run dev

it will start the frontend
