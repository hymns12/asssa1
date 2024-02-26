// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface ICalculator {
    function addAll(uint256 firstNum, uint256 secondNum) external; 

    function subAll(uint256 firstNum, uint256 secondNum) external; 

    function getAddAll() external view returns(uint256);

    function getSubAll() external view returns(uint256);
}