var People = artifacts.require("./people.sol");

module.exports = function(deployer) {
  deployer.deploy(People);
};
