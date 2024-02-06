import { colorWord } from "./colorWord"

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

