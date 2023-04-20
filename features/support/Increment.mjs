import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
Given(":number is {int}", function (number) {
  this.assignValue(number);
});

When(":the number is incremented by {int}", function (incrmnt) {
  this.newIncrmnt(incrmnt);
});

Then(":the number should be {int}", function (value) {
  let increasedvalue = this.finalResult();

  expect(increasedvalue).to.equal(value);
});
