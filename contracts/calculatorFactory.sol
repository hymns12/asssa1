// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import './CalculatorContract.sol';

contract CalculatorFactory {


    Calculator public calculator;

    Calculator[] calculators;

    function createCalculatorInstance (uint256 _stateValue) public returns (Calculator) {
        calculator = new Calculator(_stateValue);
        
        calculators.push(calculator);
        return calculator;
    }


    function getAllCalculators () external view returns (Calculator[] memory) {
        return calculators;
    }

}

