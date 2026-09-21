import checkAge from "./testCoverage";
import { getUserName, getUserStatus } from "./userCoverage";
import { describe, expect, test } from "@jest/globals";

describe("Should be Both elder younger", () => {
  test("Should be elder", () => {
    expect(checkAge(19)).toBe("Adult");
  });

  test("Should be minor", () => {
    expect(checkAge(15)).toBe("Minor");
  });
});

test("Should be bantony", () => {
  expect(getUserName()).toBe("Bantony");
});

describe("Should be Both active and inactive", () => {
  test("Should be active", () => {
    expect(getUserStatus(true)).toBe("Active");
  });

  test("Should be minor", () => {
    expect(getUserStatus(false)).toBe("Inactive");
  });
});
