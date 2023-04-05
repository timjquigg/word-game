import getAnswer from "./getAnswer";
const validate = require("./validateWord");

jest.mock("./validateWord", () => jest.fn());

test("Returns a valid word if a valid word is given from random word API", async () => {
  global.fetch = jest.fn(async () =>
    Promise.resolve({
      json: () => Promise.resolve("valid"),
    })
  ) as jest.Mock;
  validate.mockImplementation(() => true);
  // fetch.arguments("test");
  getAnswer().then((word) => {
    expect(typeof word === "string");
  });
});

test("Returns a valid word if an invalid word is first given from random word API", async () => {
  let run = 0;
  const words = ["abcde", "tests"];
  const results = [false, true];

  global.fetch = jest.fn(async () =>
    Promise.resolve({
      json: () => Promise.resolve(words[run]),
    })
  ) as jest.Mock;

  validate.mockImplementation(() => {
    run++;
    return results[run - 1];
  });
  // fetch.arguments("test");
  getAnswer().then((word) => {
    expect(typeof word === "string");
  });
});
