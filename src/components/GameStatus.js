export const GameStatus = ({ status, secretWord }) => {
  if (status === "GAME") {
    return null
  }

  if (status === "WIN") {
    return (
      <div className="result">
        <p>You win!</p>
        <p>{secretWord}</p>
      </div>
    )
  }

  return (
    <div className="result">
      <p>You lost</p>
      <p>{secretWord}</p>
    </div>
  )
}
