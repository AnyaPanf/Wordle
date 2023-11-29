
export const colorWord = (word, secretWord) => {

    let colorsOfLetters = []   //красит все буквы в инпутах
    let checkLetters = []
    word.split('').forEach((letter, idx) => {
        if (secretWord.indexOf(letter) === -1) {
            colorsOfLetters = [...colorsOfLetters, { "letter": letter, "color": "#a4aec4" }]
            checkLetters.push(letter)
        } else if (secretWord[idx] === word[idx]) {
            colorsOfLetters = [...colorsOfLetters, { "letter": letter, "color": "#79b851" }]
            checkLetters.push(letter)
        } else {
            if (secretWord.indexOf(letter) !== idx &&
                secretWord.split("").filter(el => el === letter).length < word.split("").filter(el => el === letter).length) {
                checkLetters.indexOf(letter) === -1 ? colorsOfLetters = [...colorsOfLetters, { "letter": letter, "color": "#f3c237" }] :
                    colorsOfLetters = [...colorsOfLetters, { "letter": letter, "color": "#a4aec4" }]
                checkLetters.push(letter)
            } else {
                colorsOfLetters = [...colorsOfLetters, { "letter": letter, "color": "#f3c237" }]
                checkLetters.push(letter)
            }
        }
    })
    return colorsOfLetters

}


