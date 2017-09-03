# Ethereum People List Smart Contract

Getting familiar with data storage on Ethereum.

This contract has the following two methods:
 - addPerson - Allows a person to be added and stored on the contract
 - getPeople - Returns the people stored on the contract

### Requirements:

- Node - https://github.com/nodejs
- testRPC - https://github.com/ethereumjs/testrpc                                                                                     
- truffle - https://github.com/trufflesuite/truffle

### Setup:
1. Start testRPC - `testrpc`
2. `cd` into the cloned directory.
3. Compile and migrate the People.sol contract. - `truffle compile && truffle migrate --reset`.
4. `cd` into the `react-ui` folder.
5. Start the React app with `npm install && npm start`.

### Interacting with the contract:

#### Adding people to the contract
1. All interaction will be done through the truffle console - `truffle console`.
2. Add a person to the contract. This will return a transaction receipt.
```
truffle(development)> People.deployed().then(a => (a.addPerson("Simon","Cheng",21).then(console.log)))
```
3. Add another person to the contract. This will return a transaction receipt.
```
truffle(development)> People.deployed().then(a => (a.addPerson("Jane","Doe",21).then(console.log)))
```

#### Configuring the server
Now that the contract is deployed, we need to configure our Web3 client to read from the proper address. 
1. In truffle console - `People.deployed()`
2. Copy the contract address - Ex: `0x28279635a7cb225802b9a05d6cc27651e79c2bcc` (Sorry this could have been done in the React-UI but...never added it.)

#### Viewing 

1. In `App.js` set the `var peopleContractAddress` to the copied contract address. Line 10.
1. Go to the react app URL. `http://localhost:3000/`
2. Notice that the people added to the contract are now being displayed.

OR

1. Within the truffle console = `truffle console`.
2. Enter the following:
```
truffle(development)> People.deployed().then(a => (a.getPeople().then(console.log)))
```



