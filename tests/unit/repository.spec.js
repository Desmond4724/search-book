import { isValidToken } from "@/repository";

describe("valid token", () => {
  it("cyrilic symbol should return false ", async () => {
    const token = "ффыыыыыыыыыыыыыы";
    expect(isValidToken(token)).toEqual(false);
  });

  it("minimal token length should return false", async () => {
    const token = "dddddddddd";
    expect(isValidToken(token)).toEqual(false);
  });

  it("number should return false ", async () => {
    const token = "1234567890123456";
    expect(isValidToken(token)).toEqual(false);
  });

  it("valid token should return true", () => {
    const token = "hhhhaaaaajjjjjik";
    expect(isValidToken(token)).toEqual(true);
  });
});

