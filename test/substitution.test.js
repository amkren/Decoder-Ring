// Write your tests here!

const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("To handle errors...", () => {
    it("should return false the there is no substitution alphabet provided in the parameters", () => {
        const actual = substitution("hello");

        expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const actual = substitution("All hail your master", "456efg789hijklmnopqr");
        expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
        const message = "message";
        const alphabet = "abcabcabcabcabcabcabcabcab";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    });
});

describe("when encoding a message...", () => {
    it("should encode a message by using the given substitution alphabet", () => {
        const actual = substitution("Ope, sorry about that", "123abc456efg789hijklmnopqr");
        const expected = "9hb, s9jjy 129ut t51t";

        expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
        const actual = substitution("You're a no good peasant", "123abc456efg789hijklmnopqr");
        const expected = "y9u'jb 1 89 499d hb1s18t";

        expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
        const actual = substitution("We got a twenty-three nineteen", "123abc456efg789hijklmnopqr");
        const expected = "wb 49t 1 twb8ty-t5jbb 868btbb8";

        expect(actual).to.equal(expected);
    });
});

describe("when decoding a message...", () => {
    it("should decode a message by using the given substitution alphabet", () => {
        const actual = substitution("t5bsb 7bss14bs 51vb 2bb8 t99 g984", "123abc456efg789hijklmnopqr", false);
        const expected = "these messages have been too long";

        expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
        const message = "ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "message";
        expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
        const message = "yp ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "my message";
        expect(actual).to.equal(expected);
    });
});