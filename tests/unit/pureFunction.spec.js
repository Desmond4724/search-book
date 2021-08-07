import { queryToUrl } from "@/pureFunctions";

describe("Pure function", () => {
  it("queryToUrl should return right query string", function () {
    const query = {
      item: "test",
      item2: "test2",
    };

    expect(queryToUrl(query)).toBe("?item=test&item2=test2");
  });
});
