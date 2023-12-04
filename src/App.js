import { Word } from "./components/Word";
import { useState, useEffect } from "react"
import { colorAlphabet } from "./colorAlphabet";
import Keyboard from "./components/Keyboard";
import { CurrentWord } from "./components/CurrentWord";
import { EmptyLine } from "./components/EmptyLine";
import { dictionary } from "./dictionary";

const MAX_ATTEMTS_NUMBER = 6;
// https://javascript.info/task/uppercast-constant

function App() {
  const [words, setWords] = useState([]);
  const [secretWord, setSecretWord] = useState(dictionary[Math.floor(Math.random() * dictionary.length)].toUpperCase())
  const [letter, setLetter] = useState("")
  const [text, setText] = useState("")
  console.log(secretWord);

  const colors = colorAlphabet(words, secretWord)

  useEffect(() => {
    if (words[words.length - 1] === secretWord) {
      setText("You win!")
    } else if (words.length === 6 && words[words.length - 1] !== secretWord) {
      setText("You lost!")
    }
  }, [words])

  const handleEnter = () => {
    if (letter.length === 5 ) {
      setWords(prev => [...prev, letter])
      setLetter("")
    } else {
      return console.log("Unfinished word");
    }
  }

  const handleDelete = () => {
    return setLetter(prev => prev.slice(0, -1))
  }

  const handleLetterPress = (letter) => {

    setLetter(prev => prev.length < 5 ? prev + letter : prev)
  }

  const emptyLinesNumber = words.length === MAX_ATTEMTS_NUMBER
    ? 0
    : MAX_ATTEMTS_NUMBER - words.length - 1;

  return (
    <div className="main">
      <div className="container">
        <div className="main__inp">
          {words.map((word) => (
            <Word word={word} secretWord={secretWord} />
          ))}
          {words.length < MAX_ATTEMTS_NUMBER && (
            <CurrentWord letters={letter} />
          )}
          {Array(emptyLinesNumber).fill().map(() => (
            <EmptyLine />
          ))}
        </div>
        <p className="result">{text}</p>
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

// https://magma.com/d/J59Xwc0QPl