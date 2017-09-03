pragma solidity ^0.4.15;
contract People {
	
	Person[] public people;

	struct Person {
		bytes32 firstName;
		bytes32 lastName;
		uint age;
	}

	function addPerson(bytes32 _firstname, bytes32 _lastname, uint _age) returns (bool success) {
		Person memory newPerson;
		newPerson.firstName = _firstname;
		newPerson.lastName = _lastname;
		newPerson.age = _age;	

		people.push(newPerson);
		return true;
	}

	function getPeople() constant returns(bytes32[], bytes32[], uint[]) {

		uint length = people.length;

		bytes32[] memory firstNames = new bytes32[](length);
		bytes32[] memory lastNames = new bytes32[](length);
		uint[] memory ages = new uint[](length);

		for (uint i = 0; i < people.length; i++) {
			Person memory currentPerson;
			currentPerson = people[i];

			firstNames[i] = currentPerson.firstName;
			lastNames[i] = currentPerson.lastName;
			ages[i] = currentPerson.age;
		}

		return (firstNames, lastNames, ages);
	}

}




