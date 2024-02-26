// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import './spide.sol';

interface ICalculatorFactory {
    function createbigSpide() external returns (spide newspide_, uint256 length_);

    function getbigSpide() external view returns(spide[] memory);
}