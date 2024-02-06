import { colorWord } from "./colorWord";

describe("colorWord", () => {
  describe("SWEET & PIQUE", () => {
    const actualColors = colorWord("SWEET", "PLACE").map(obj => obj.color);
    expect(actualColors).toEqual(["grey", "grey", "yellow", "grey", "grey"]);
  })

  describe("secret === PLACE", () => {
    test("word === SWEET", () => {
      const expectedResult = [{
        letter: "S",
        color: "grey"
      },
      {
        letter: "W",
        color: "grey"

      },
      {
        letter: "E",
        color: "yellow"

      },
      {
        letter: "E",
        color: "grey"

      },
      {
        letter: "T",
        color: "grey"

      }];
      expect(colorWord("SWEET", "PLACE")).toEqual(expectedResult);
    });

    test("word === PLACE", () => {
      const expectedResult = [{
        letter: "S",
        color: "grey"
      },
      {
        letter: "W",
        color: "grey"

      },
      {
        letter: "E",
        color: "yellow"

      },
      {
        letter: "E",
        color: "grey"

      },
      {
        letter: "T",
        color: "grey"

      }];

      expect(colorWord("SWEET", "PLACE")).toEqual(expectedResult);
    });
  })
})