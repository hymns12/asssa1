// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract spide {
    uint256  addnum;
    uint256  subnum;

    function add2Numbers(uint256 firstspider, uint256 secondspider) external {
        addnum= firstspider + secondspider;
    }

    function sub2Numbers(uint256 firstspider, uint256 secondspider) external {
        require(firstspider > secondspider, "firstNum must be greater than secondNum");
        subnum=  firstspider - secondspider;
    }

    function getAddResult() external view returns(uint256){
        return addnum;
    }

    function getSubResult() external view returns(uint256){
        return subnum;
    }
}