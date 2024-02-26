// SPDX-License-Identifier: SEE UNLICENSED
pragma solidity ^0.8.9;


contract Calculator {

    uint256 stateValue;

    constructor (uint256 _stateValue) {
        stateValue = _stateValue;
    }

    
    function multiplyBy (uint256 _num) external {
        stateValue = stateValue * _num;
    }

    function getStateValue () external view returns (uint256) {
        return stateValue;
    }
}