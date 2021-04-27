let vowels = ["a","e","i","o","u"];

function translate(word){
    const lowerWord = word.toLowerCase();
    for (let vowel of vowels){
        if (vowel === lowerWord[0]){
        return lowerWord + "way";
        }
    }
    let matched = lowerWord.match(/[aeiou]/g);
    let vowel = lowerWord.indexOf(matched[0]);
    let subWord = lowerWord.substring(vowel) + lowerWord.substring(0, vowel) + "ay";
    return subWord;
}
module.exports.translate = translate;