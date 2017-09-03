import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import _ from 'lodash';

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

var peopleContractABI = [{"constant":true,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_firstname","type":"bytes32"},{"name":"_lastname","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"age","type":"uint256"}],"payable":false,"type":"function"}]
var peopleContractAddress = '0x28279635a7cb225802b9a05d6cc27651e79c2bcc'
var peopleContract = new ETHEREUM_CLIENT.eth.Contract(peopleContractABI,peopleContractAddress)

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstNames: [],
      lastNames: [],
      ages: []
    }
  }

  componentWillMount() {


    console.log(ETHEREUM_CLIENT)

    var data = peopleContract.methods.getPeople().call().then(function(data) {
        this.setState({
          firstNames: String(data[0]).split(','),
          lastNames: String(data[1]).split(','),
          ages: String(data[2]).split(',')
        });
    }.bind(this))
  }

  render() {

    var TableRows = [];

    _.each(this.state.firstNames, (value,index) => {
      TableRows.push (
        <tr>
          <th>{ETHEREUM_CLIENT.utils.hexToUtf8(this.state.firstNames[index])}</th>
          <th>{ETHEREUM_CLIENT.utils.hexToUtf8(this.state.lastNames[index])}</th>
          <th>{this.state.ages[index]}</th>
        </tr>
      )
    })

    return (
      <div className="App">
        <div className="App-header">
        <h2>This is a dApp built with a React UI</h2>
        <h3> The following is the data stored within the People Smart Contract </h3>
        <h3> Contract Address: {peopleContractAddress} </h3>
        </div>
        <div className="App-Content">
          <table>
            <thead>
              <tr>
                <th> First Name </th>
                <th> Last Name </th>
                <th> Age </th>
              </tr>
            </thead>
            <tbody>
              {TableRows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
