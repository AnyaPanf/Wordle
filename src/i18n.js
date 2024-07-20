import i18n from "i18next";
import { Translation, initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },

    resources: {
        en: {
            translation: {
                rulesBtn: 'How to play',
                newGameBtn: 'New game',
                firstRowKeys: "QWERTYUIOP",
                secondRowKeys: "ASDFGHJKL",
                thirdRowKeys: "ZXCVBNM",
                win: 'You win!',
                lost: 'You lost',
                rules: 'You have to guess the Wordle in six goes or less./ The color of a tile will change to show you how close your guess was./ If the tile turns green, the letter is in the word, and it is in the correct spot./ If the tile turns yellow, the letter is in the word, but it is not in the correct spot./ If the tile turns gray, the letter is not in the word./ Letters can be used more than once./ Answers are never plurals.',
                unfinishedMistake: 'Unfinished word',
                noSuchWordMistake: 'The word does not exist',
            }
        },
        ru: {
            translation: {
                rulesBtn: 'Правила игры',
                newGameBtn: 'Новая игра',
                firstRowKeys: "ЙЦУКЕНГШЩЗХЪ",
                secondRowKeys: "ФЫВАПРОЛДЖЭ",
                thirdRowKeys: "ЯЧСМИТЬБЮ",
                win: 'Вы выиграли!',
                lost: 'Вы проиграли',
                rules: 'Вы должны отгадать слово за шесть или менее попыток./Фон буквы будет меняться, показывая, насколько близка была ваша догадка./ Зеленый фон значит, что буква есть в слове и она находится в правильном месте./ Желтый фон значит, что буква есть в слове, но она находится в неправильном месте./ Серый фон означает, что буквы нет в слове./ Буквы могут встречаться более одного раза./ Ответы никогда не бывают во множественном числе.',
                unfinishedMistake: 'Незаконченное слово',
                noSuchWordMistake: 'Такого слова нет',
            }
        },
    }
})

export default i18n;