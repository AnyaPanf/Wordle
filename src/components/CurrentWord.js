
export const CurrentWord = ({ currentWord }) => {
  const emptySlots = Array(5).fill()

  return (
    <div className="word__squares">
      {emptySlots.map((el, idx) => (
        <div className="word__square">{currentWord[idx]}</div>
      ))}
    </div>
  )
}
