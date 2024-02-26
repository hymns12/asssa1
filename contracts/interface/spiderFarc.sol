// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./spider.sol";

contract CalculatorFactory {
    Calculator[] multiCalculator;

    function createCalculator() external returns (Calculator newCalculator_, uint256 length_) {
        newCalculator_ = new Calculator();

        multiCalculator.push(newCalculator_);

        length_ = multiCalculator.length;
    }

    function getCalculatorClones() external view returns(Calculator[] memory) {
        return multiCalculator;
    }
}