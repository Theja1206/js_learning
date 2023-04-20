import { setWorldConstructor } from "@cucumber/cucumber";

class Increment
{
    constructor()
    {
        this.num=0;
    }

    assignValue(newnumber)
    {
        this.num=newnumber
    }

    newIncrmnt(valuetoincrease)
    {
        this.num+=valuetoincrease
    }

    finalResult()
    {
        return this.num
    }
}

setWorldConstructor(Increment)