// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import '../interface/spide.sol';

contract CalculatorFactory {
    spide[] newSpider;

    function createCalculator() external returns (spide newCalculator_, uint256 length_) {
        newCalculator_ = new spide();

        newSpider.push(newCalculator_);

        length_ = newSpider.length;
    }

    function getCalculatorClones() external view returns(spide[] memory) {
        return newSpider;
    }
}