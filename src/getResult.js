export const getResult = (words, secretWord) => {
  if (words.at(-1) === secretWord) {
    return "WIN"
  }
  return words.length === 6 ? "LOST" : "GAME"
}