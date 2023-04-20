import { Given,When,Then } from "@cucumber/cucumber";
import { expect } from "chai";
Given('the numbers are {int},{int}', function (num1, num2) {
    this.setValues(num1,num2)
    });

    

      Then('result should be {int}', function (result) {
        expect(result).to.equal(this.reslt())
        });