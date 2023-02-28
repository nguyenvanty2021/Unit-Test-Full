import { randomBetween, sum } from "./sum";
// test case này là test func return
describe("randomBetween", () => {
  it("suming 5 and 2 will return 7", () => {
    // toBe là kết quả, bằng
    expect(sum(5, 2)).toBe(7);
  });
  it("called with min = 3 and max = 5 returns 3", () => {
    expect(randomBetween(3, 5)).toBeGreaterThanOrEqual(3);
  });
});
