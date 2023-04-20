import calcobj from "../src/calc.js";
import { assert, expect } from "chai";

describe('Calculator test', () => {
    it('Addition', () => {
        const result = calcobj.add(10, 20)

        assert.equal(result, 30, "this result  is not valid ")
    });

    it('Subtraction', () => {

        const result = calcobj.sub(10, 20)

        assert.equal(result, -10, "this result  is not valid ")

    });

    it('Division', () => {

        const result = calcobj.div(10, 20)

        // assert.equal(result,6,"this result  is not valid ")

        expect(result).to.equal(6)

    });
});