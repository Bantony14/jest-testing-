import { add } from "./add";
import { describe, expect, test } from "@jest/globals";

// test("add should return sum ", () => {
//   expect(add(5, 5)).toBe(10);
// });

// describe("Add Two Number", () => {
//   test("should be 10", () => {
//     expect(add(5, 5)).toBe(10);
//   });

//   test("should be 30", () => {
//     expect(add(10, 20)).toBe(30);
//   });

//   test("should be 5", () => {
//     expect(add(0, 5)).toBe(5);
//   });
// });

// interface User {
//   name: string;
//   age: number;
// }
// const user: User = {
//   name: "ban",
//   age: 24,
// };

// test("should be user by equal", () => {
//   expect(user).toEqual({
//     name: "ban",
//     age: 24,
//   });
// });

// test("should be user be", () => {
//   expect(user).toBe({
//     name: "ban",
//     age: 24,
//   });
// });

// test("should be user by equal", () => {
//   expect(user).toEqual({
//     name: expect.any(String),
//     age: expect.any(Number),
//   });
// });

test("should be user by equal", () => {
  expect(["bantony", "antony", "sonu"]).toContain("bantony");
});

test("should be user by equal", () => {
  expect("hello world bantony").toMatch("world");
});

test("should be user by equal", () => {
  expect(["bantony", "antony", "sonu"]).toHaveLength(3);
});

test("should be user by equal", () => {
  expect(["bantony", "antony", "sonu"]).toEqual(
    expect.arrayContaining(["bantony", "antony"]),
  );
});
