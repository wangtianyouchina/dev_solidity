
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "../contracts/whiteList.sol";
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";

contract TestMonsterNFT {
  function testInitialBalanceUsingDeployedContract() {
    MetaCoin meta = MonsterNFT(DeployedAddresses.MonsterNFT());

    uint expected = 10000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 MetaCoin initially");
  }

  function testInitialBalanceWithNewMetaCoin() {
    MonsterNFT meta = new MonsterNFT();

    uint expected = 10000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 MetaCoin initially");
  }
}
