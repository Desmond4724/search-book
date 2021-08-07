import { user } from "@/service/userService";

describe("User service", () => {
  it("user token should return null", () => {
    expect(user.getToken()).toEqual(null);
  });

  it("user token should return token", () => {
    const token = "sdfddddddasdfds";
    user.setToken(token);
    expect(user.getToken()).toEqual(token);
  });
});
