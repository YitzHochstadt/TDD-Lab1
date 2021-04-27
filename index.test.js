const {translate} = require("./index");

describe("translate function", () => {

    test("starts w/ a", () => {
        let result = translate("apple");
        expect(result).toEqual("appleway")
    });
    test("starts w/ e", () => {
        let result = translate("else");
        expect(result).toEqual("elseway")
    });
    test("starts w/ i", () => {
        let result = translate("impossible");
        expect(result).toEqual("impossibleway")
    });
    test("starts w/ o", () => {
        let result = translate("outrage");
        expect(result).toEqual("outrageway")
    });
    test("starts w/ u", () => {
        let result = translate("Underwear");
        expect(result).toEqual("underwearway")
    });
    test("first non-vowel", () => {
        let result = translate("pear");
        expect(result).toEqual("earpay")
    });
    test("first non-vowel", () => {
        let result = translate("water");
        expect(result).toEqual("aterway")
    });
    test("first two non-vowels", () => {
        let result = translate("clear");
        expect(result).toEqual("earclay")
    });
    test("first three non-vowels", () => {
        let result = translate("school");
        expect(result).toEqual("oolschay")
    });
    test("first three+ non-vowels", () => {
        let result = translate("rhythmic");
        expect(result).toEqual("icrhythmay")
    });
});