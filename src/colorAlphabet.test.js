import { colorAlphabet } from "./colorAlphabet";


jest.mock("./colorWord", () => ({
  colorWord: (word, secretWord) => {
    if (word === "SWEET" && secretWord === "PIQUE") {
      return [
        { color: "grey", letter: "S" },
        { color: "grey", letter: "W" },
        { color: "yellow", letter: "E" },
        { color: "grey", letter: "E" },
        { color: "grey", letter: "T" },
      ];
    }
    if (word === "POINT" && secretWord === "PIQUE") {
      return [
        { color: "green", letter: "P" },
        { color: "grey", letter: "O" },
        { color: "yellow", letter: "I" },
        { color: "grey", letter: "N" },
        { color: "grey", letter: "T" },
      ];
    }
  },
}));

describe("colorAlphabet", () => {
  test("word === PLACE", () => {
    const expectedResult = {
      "S": "grey",
      "W": "grey",
      "E": "yellow",
      "T": "grey",
      "P": "green",
      "O": "grey",
      "I": "yellow",
      "N": "grey",
    };
    const actualResult = colorAlphabet(["SWEET", "POINT"], "PIQUE")
    expect(actualResult).toEqual(expectedResult);
  });
})