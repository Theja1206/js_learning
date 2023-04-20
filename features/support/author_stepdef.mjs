import { Given,When,Then } from "@cucumber/cucumber";
import { expect, assert } from "chai";

let retrieve=null
let value=[]
let count=0
let flag=false
//let var=null
Given("I have the following books in store",function(authrbkname) 
{
    
   
    value=authrbkname.hashes()

     
})


When("I search for books by author {string}",function(args)
{
 retrieve=value.filter(values =>values.author== args)

})

Then("I find {int} books",function(number)
{
   // expect(value).to.equal("Erik Larson")

   expect(retrieve.length).to.equal(number)
 
    //console.log("total number of books by author Erik Larson is :"+count)
})