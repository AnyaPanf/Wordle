import { colorWord } from "./colorWord"

// ["SWEET", "POINT"]
// 'PIQUE'

// S - 0
// W - 0
// E - 2
// E - 0
// T - 0
// P - 1
// O - 0
// I - 2
// N - 0
// T - 0

// 0 black
// 1 green
// 2 yellow

const priorities = [
    "#a4aec4",  //grey
    "f3c237",  //yellow
    "#79b851",  //green
]

export const colorAlphabet = (words, secretWord) => {
    const originalLetters = words.flatMap(word => colorWord(word, secretWord));
    const finalLetters = {};

    for (const { color, letter } of originalLetters) {
        const prevColor = finalLetters[letter];
        if (prevColor === undefined || priorities.indexOf(color) > priorities.indexOf(prevColor)) {
            finalLetters[letter] = color;
        }
    }

    return finalLetters
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn
// in
// hasOwnProperty
// Object.hasOwn
