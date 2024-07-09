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
                rules: 'You have to guess the Wordle in six goes or less./ A correct letter turns green./ A correct letter in the wrong place turns yellow./ An incorrect letter turns gray./ Letters can be used more than once./ Answers are never plurals.',
                unfinishedMistake: 'Unfinished word',
                noSuchWordMistake: 'The word does not exist',
            }
        },
        ru: {
            translation: {
                rulesBtn: 'Правила игры',
                newGameBtn: 'Новая игра',
                firstRowKeys: "ЙЦУКЕНГШЩЗХЪ",
                secondRowKeys: "ЁФЫВАПРОЛДЖЭ",
                thirdRowKeys: "ЯЧСМИТЬБЮ",
                win: 'Вы выиграли!',
                lost: 'Вы проиграли',
                rules: 'Вы должны отгадать слово за шесть или менее попыток./Правильные буквы окрашиваются в зеленый цвет./ Правильные буквы в неправильных местах окрашиваются в желтый цвет./ Буквы, которых нет в слове, окрашиваются в серый цвет./ Буквы могут встречаться более одного раза./ Ответы никогда не бывают во множественном числе.',
                unfinishedMistake: 'Незаконченное слово',
                noSuchWordMistake: 'Такого слова нет',
            }
        },
    }
})

export default i18n;