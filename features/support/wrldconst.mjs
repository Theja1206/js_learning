import { setWorldConstructor } from "@cucumber/cucumber"

class Addition
{
    Constructor()
    {
        this.x=0
        this.y=0
        this.result=0
    }

    setValues(a,b)
    {
        this.x=a
        this.y=b
    }

    add()
    {
        this.result=this.x+this.y
    }

    reslt()
    {
        return this.result
    }
}

setWorldConstructor(Addition)