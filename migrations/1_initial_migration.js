// const Migrations = artifacts.require("Migrations");
//
// module.exports = function (deployer) {
//   deployer.deploy(Migrations);
// };


const MonsterNFT = artifacts.require("MonsterNFT");

module.exports = function (deployer) {
  deployer.deploy(MonsterNFT,"123","123","0x63616e6469646174653100000000000000000000000000000000000000000000");
};
