import { Word } from "./components/Word";
import { useState, useMemo } from "react"
import { colorAlphabet } from "./colorAlphabet";
import Keyboard from "./components/Keyboard";
import { CurrentWord } from "./components/CurrentWord";
import { EmptyLine } from "./components/EmptyLine";
import { dictionaryEn } from "./dictionaryEn";
import { dictionaryRu } from "./dictionaryRu";
import { GameStatus } from "./components/GameStatus";
import { getResult } from "./getResult";
import { Rules } from "./components/Rules";
import { useTranslation } from "react-i18next";

const MAX_ATTEMTS_NUMBER = 6;

function App() {
  const { t, i18n } = useTranslation();
  const dictionary = (i18n.language === 'en' ? dictionaryEn : dictionaryRu);
  const generateInitialState = () => ({
    currentWord: '',
    secretWord: dictionary[Math.floor(Math.random() * dictionary.length)].toUpperCase(),
    words: []
  })

  const [state, setState] = useState(generateInitialState);
  const { words, currentWord, secretWord } = state;
  const [mistake, setMistake] = useState("");
  const [rules, setRules] = useState(false);
  const colors = useMemo(() => colorAlphabet(words, secretWord), [words, secretWord]);
  const result = useMemo(() => getResult(words, secretWord), [words, secretWord]);

  const handleEnter = () => {
    setState((prev) => {
      if (prev.currentWord.length === 5 && dictionary.includes(currentWord.toLowerCase())) {
        return {
          ...prev,
          words: [...prev.words, prev.currentWord],
          currentWord: ""
        }
      } else if (prev.currentWord.length !== 5) {
        setMistake(t("unfinishedMistake"))
        setTimeout(() => setMistake(""), 2000)
      } else {
        setMistake(t("noSuchWordMistake"))
        setTimeout(() => setMistake(""), 2000)
      }
      return prev
    })
  };

  const handleDelete = () => {
    setState((prev) => ({ ...prev, currentWord: prev.currentWord.slice(0, -1) }))
  };

  const handleLetterPress = (currentWord) => {
    setState((prev) => prev.currentWord.length < 5 ? { ...prev, currentWord: prev.currentWord + currentWord } : prev)
  };

  const handleNewGame = () => {
    setState(generateInitialState());
  };

  const handleRules = () => {
    setRules(!rules)
  };

  const handleLangChange = (code) => {
    i18n.changeLanguage(code)
    setState(generateInitialState())
  }

  const languages = [
    { code: 'en', name: 'En' },
    { code: 'ru', name: 'Ру' },
  ];

  const emptyLinesNumber = words.length === MAX_ATTEMTS_NUMBER
    ? 0
    : MAX_ATTEMTS_NUMBER - words.length - 1;

  return (
    <div className="main">
      <div className="container">
        <div className="main__btns">
          <div type="button" className="main__btn" onClick={handleRules}><p>{t("rulesBtn")}</p></div>
          <div className="main__languages">
            {languages.map((lang) => {
              return <button
                className={`language__btn ${i18n.language === lang.code ? 'language__btn-checked' : ''}`}
                onClick={() => { handleLangChange(lang.code) }}>{lang.name}</button>
            })}
          </div>
          <div type="button" className={`main__btn`} onClick={handleNewGame}><p>{t("newGameBtn")}</p></div>
        </div>

        <div className="main__inp">
          {words.map((word) => (
            <Word word={word} secretWord={secretWord} />
          ))}
          {words.length < MAX_ATTEMTS_NUMBER && (
            <CurrentWord currentWord={currentWord} />
          )}
          {Array(emptyLinesNumber).fill().map(() => (
            <EmptyLine />
          ))}
          <div className="mistake" style={{ display: mistake ? 'block' : 'none' }}><p>{mistake}</p></div>
          <GameStatus status={result} secretWord={secretWord} />
          <Rules handleRules={handleRules} rules={rules} />
        </div>
        <div className="main__keyboard">
          <Keyboard
            colors={colors}
            onLetterPress={handleLetterPress}
            handleEnter={handleEnter}
            handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;