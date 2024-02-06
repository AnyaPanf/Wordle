import { Word } from "./components/Word";
import { useState, useMemo } from "react"
import { colorAlphabet } from "./colorAlphabet";
import Keyboard from "./components/Keyboard";
import { CurrentWord } from "./components/CurrentWord";
import { EmptyLine } from "./components/EmptyLine";
import { dictionary } from "./dictionary";
import { GameStatus } from "./components/GameStatus";
import { getResult } from "./getResult";

const MAX_ATTEMTS_NUMBER = 6;

const generateInitialState = () => ({
  currentWord: '',
  secretWord: dictionary[Math.floor(Math.random() * dictionary.length)].toUpperCase(),
  words: []
})

function App() {
  const [state, setState] = useState(generateInitialState)
  const { words, currentWord, secretWord } = state
  const [mistake, setMistake] = useState("")

  const colors = useMemo(() => colorAlphabet(words, secretWord), [words, secretWord]);
  const result = useMemo(() => getResult(words, secretWord), [words, secretWord])

  const handleEnter = () => {

    setState((prev) => {
      if (prev.currentWord.length === 5 && dictionary.includes(currentWord.toLowerCase())) {
        return {
          ...prev,
          words: [...prev.words, prev.currentWord],
          currentWord: ""
        }
      } else if (prev.currentWord.length !== 5) {
        setMistake("Unfinished word")
        setTimeout(() => setMistake(""), 2000)
      } else {
        setMistake("The word does not exist")
        setTimeout(() => setMistake(""), 2000)
      }
      return prev
    })
  }

  const handleDelete = () => {
    setState((prev) => ({ ...prev, currentWord: prev.currentWord.slice(0, -1) }))
  }

  const handleLetterPress = (currentWord) => {
    setState((prev) => prev.currentWord.length < 5 ? { ...prev, currentWord: prev.currentWord + currentWord } : prev)
  }

  const handleNewGame = () => {
    setState(generateInitialState());
  }

  const emptyLinesNumber = words.length === MAX_ATTEMTS_NUMBER
    ? 0
    : MAX_ATTEMTS_NUMBER - words.length - 1;

  return (
    <div className="main">
      <div className="container">
        <div type="button" className="main__btn" onClick={handleNewGame}><p>New game</p></div>
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