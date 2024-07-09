import { colorWord } from "../colorWord";

export const Word = ({ word, secretWord }) => {
  const colorsOfLetters = colorWord(word, secretWord)

  return (
    <div className='word'>
      <div className="word__squares">
        {colorsOfLetters.map(({ letter, color }) => (
          <div className="word__square" style={{ background: color }}>{letter}</div>
        ))}
      </div>
    </div>
  )
}