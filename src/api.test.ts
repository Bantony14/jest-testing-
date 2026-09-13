import { expect, jest, test } from "@jest/globals";

import { api } from "./api";

// test("should return user data", async () => {
//   globalThis.fetch = jest
//     .fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>()
//     .mockResolvedValue({
//       json: async () => ({
//         name: "bantony",
//         age: 24,
//       }),
//     } as Response);

//   const user = await api();

//   expect(user).toEqual({
//     name: "bantony",
//     age: 24,
//   });
// });

test("should return user data", async () => {
  globalThis.fetch = jest
    .fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>()
    .mockResolvedValue({
      json: async () => ({
        name: "bantony",
        age: 24,
      }),
    } as Response);

  const user = await api();
  expect(user).toEqual({
    name: expect.any(String),
    age: expect.any(Number),
  });
});

test("should return user data", async () => {
  globalThis.fetch = jest
    .fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>()
    .mockRejectedValue(new Error("Network error"));

  await expect(api()).rejects.toThrow("Network error");
});
