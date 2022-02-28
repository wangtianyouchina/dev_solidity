// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Adoption {

    address[16] public adopters; // public  varibales have automatic getter methods,but in the case of arrays
    // a key is required and will only return a single value.
    function adopt(uint petId) public returns (uint) {
        require(petId >= 0 && petId <= 15);
        adopters[petId] = msg.sender;
        return petId;
    }

    function getAdopters() public view returns (address[16] memory) {
        return adopters;
    }

}