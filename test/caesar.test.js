// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
    it("Should return false if shift is less than 25, greater than -25, or equal to zero", () => {
        const actual = caesar("Hello there", 0)
        expect(actual).to.be.false

        const above = caesar("Hello there", 26)
        expect(above).to.be.false

        const below = caesar("Hello there", -26)
        expect(below).to.be.false
    })
    it("Spaces should be maintained throughout, as should other non-alphabetic symbols", () => {
        const expected = "w rcb'h pszwsjs ks'js ash pstcfs"
        const actual = caesar("I don't believe we've met before", 14)

        expect(actual).to.equal(expected)
    })
    it("capital letter will be ignored when encoded or decoded", () => {
        const expected = "hwbm hwbo'g kcbrsfzobrg"
        const actual = caesar("Tiny Tina's WoNdErlAnDs", 14)

        expect(actual).to.equal(expected)
    })
    it("If a letter is shifted so that it goes \"off\" the alphabet (e.g. a shift of 3 on the letter \"z\"), it should wrap around to the front of the alphabet (e.g. \"z\" becomes \"c\")", () => {
        const expected = 'a whole new world'
        const actual = caesar("z vgnkd mdv vnqkc", 25, false)

        expect(actual).to.equal(expected)
    })
})