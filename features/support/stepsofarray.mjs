import { Given, When, Then } from "@cucumber/cucumber";

import { expect } from "chai";

let arr = []
Given(":array is empty", function () {

    console.log("array is declared as empty")

});

Then(":length of array should be zero", function () {

    let count = arr.length

    expect(0).to.equal(count)
});

When( ":the array is loaded with elements {int},{int},{int}", function (val1,val2,val3) {

    arr=[val1,val2,val3]//arr.push(val1)
    //arr.push(val2)
    //arr.push(val3)
    console.log("array is loaded with elements")
   
});
Then(":the length of array should be {int}", function (lngth) {

    let count=arr.length

    expect(lngth).to.equal(count)
});
