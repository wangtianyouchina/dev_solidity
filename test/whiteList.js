const MonsterNFT = artifacts.require("MonsterNFT");


contract("MonsterNFT",(accounts) => {
    let monsterNFT;
    let expectedAdopter;
    
    before(async() => {
      monsterNFT = await MonsterNFT.deployed();

    });

    
    describe("MonsterNFT a pet and retrieving account addresses",async() => {
      
      before("adopt a pet using accounts[0]",async() => {

        await monsterNFT.setBaseUri("456");

      });

      it("can fetch the address of an owner by pet id",async() => {
        let url = await monsterNFT.baseURI();
        assert.equal(url, "456", "url 不同");

          // assert.equal(adopter,expectedAdopter,"The owner of the adopted pet should be the frist account");
      });

  });

    describe("adopting a pet and retrieving account addresses",async() => {
        before("adopt a pet using accounts[0]",async() => {

          await monsterNFT.setBaseUri("123");

        });
        it("can fetch the address of an owner by pet id",async() => {
          let url = await monsterNFT.baseURI();

          assert.equal(url, "123", "url 不同");

            // assert.equal(adopter,expectedAdopter,"The owner of the adopted pet should be the frist account");
        });

    });
   

 
    describe("fetch the collection of all pet owners' addr",async() => {
        
      before("adopt a pet using accounts[0]",async() => {

        await monsterNFT.changePricePresale(2500000000);

      });

      it("can fetch the address of an owner by pet id",async() => {
        let url = await monsterNFT.pricePresale();

        assert.equal(url, 2500000000, "pricePresal is not equal");

          // assert.equal(adopter,expectedAdopter,"The owner of the adopted pet should be the frist account");
      });
    });

    describe("fetch the collection of all pet owners' addr",async() => {
        
      before("adopt a pet using accounts[0]",async() => {

        await monsterNFT.setUpPresale();

      });

      it("can fetch the address of an owner by pet id",async() => {
        let step = await monsterNFT.sellingStep();

        assert.equal(step, MonsterNFT.Steps.Presale, "Steps.Presale is not correct");

          // assert.equal(adopter,expectedAdopter,"The owner of the adopted pet should be the frist account");
      });
    });

    describe("fetch the collection of all pet owners' addr",async() => {
        
      before("adopt a pet using accounts[0]",async() => {


        await monsterNFT.setUpSale();
        await monsterNFT.changePriceSale(75000000000);

      });

      it("can fetch the address of an owner by pet id",async() => {
        let step = await monsterNFT.saleMint(1,{value:75000000000});

        // assert.equal(step, MonsterNFT.Steps.saleMint, "Steps.Presale is not correct");
        // assert.equal(accounts[0], MonsterNFT.Steps.saleMint, "Steps.Presale is not correct");
        console.log(step);

          // assert.equal(adopter,expectedAdopter,"The owner of the adopted pet should be the frist account");
      });
    });


});

// contract("2nd MetaCoin test", async accounts => {
  // it("should put 10000 MetaCoin in the first account", async () => {
  //   let instance = await MonsterNFT.deployed("123","123","0x63616e6469646174653100000000000000000000000000000000000000000000");

  //   let balance = await instance.baseURI();
  //   assert.equal(balance, "123");
  // });


  // it("should call a function that depends on a linked library", async () => {
  //   let instance = await MonsterNFT.deployed("123","123","0x63616e6469646174653100000000000000000000000000000000000000000000");
  //   let rest = await instance.setBaseUri("444",{from:"0x239264Ce15b2430677141133A7155B6179c501c8"} ,function (err ,resut) {

  //     if (err) {
  //       console.log(err);
  //     }
  //     else {
  //        console.log(resut);
  //     }
  //   });

    // let baseURI = await instance.baseURI();
    // console.log("baseURI = " ,baseURI);
   // let outCoinBalance = await meta.getBalance.call(accounts[0]);
   // let metaCoinBalance = outCoinBalance.toNumber();
   // let outCoinBalanceLat = await meta.getBalanceInLat.call(accounts[0]);
   // let metaCoinLatBalance = outCoinBalanceLat.toNumber();
  //  assert.equal(baseURI, "444");
//  });



// });
