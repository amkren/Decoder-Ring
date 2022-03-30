// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("when encoding a message...", () => {
    it("should encode a message by translating each letter into number pairs", () => {
        const actual = polybius("That there is a fine hamster");
        const expected = "44321144 4432512451 4234 11 12423351 32112334445124";

        expect(actual).to.equal(expected);
    });

    it("should translate both i and j to the number 42", () => {
        const actual = polybius("just a stinker");
        const expected = "42543444 11 34444233525124";

        expect(actual).to.equal(expected);
    });

    it("should leave spaces in the input alone", () => {
        const actual = polybius("This is an outrage");
        const expected = "44324234 4234 1133 43544424112251";

        expect(actual).to.equal(expected);
    });
});

describe("when decoding a message...", () => {
    it("should decode a message by translating number pairs into letters", () => {
        const actual = polybius("42 1123 12542445 423331112433114451", false);
        const expected = "(i/j) am fury (i/j)ncarnate";

        expect(actual).to.equal(expected);
    });

    it('should return false if the length of the sequence of numbers is not even', () => {
        const actual = polybius("44324234 4234 443251 13113444 3444241125", false);
        const expected = "th(i/j)s (i/j)s the last straw";

        expect(actual).to.equal(expected);
    });

    it("should convert the number 42 into both the letters i and j", () => {
        const actual = polybius("1224423152", false);
        const expected = "fr(i/j)ck";

        expect(actual).to.equal(expected);
    });

    it("should leave spaces in the input alone", () => {
        const actual = polybius("44324234 4234 1133 43544424112251", false);
        const expected = "th(i/j)s (i/j)s an outrage";

        expect(actual).to.equal(expected);
    });
});