import { expect, jest, test, afterEach } from "@jest/globals";

import { api, createUser, getUser, getUserAge, twoData } from "./api";
import axios from "axios";

afterEach(() => {
  jest.restoreAllMocks();
});

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
//     name: expect.any(String),
//     age: expect.any(Number),
//   });
// });

// test("should return user data", async () => {
//   globalThis.fetch = jest
//     .fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>()
//     .mockRejectedValue(new Error("Network error"));

//   await expect(api()).rejects.toThrow("Network error");
// });

// test("should return user data", async () => {
//   jest.spyOn(axios, "get").mockResolvedValue({
//     data: {
//       name: "bantony",
//       age: 24,
//     },
//   });

//   const data = await api();
//   expect(data).toEqual({
//     name: "bantony",
//     age: 24,
//   });
// });

// test("send user data", async () => {
//  jest.spyOn(axios, "post").mockResolvedValue({
//     data: {
//       name: "bantony",
//       age: 24,
//     },
//   });

//   await createUser({
//     name: "bantony",
//     age: 24,
//   });

//   expect(axios.post).toHaveBeenCalledWith("/api/user", {
//     name: "bantony",
//     age: 24,
//   });
// });

// test("should return user data", async () => {
//   jest
//     .spyOn(axios, "get")
//     .mockResolvedValueOnce({
//       data: {
//         name: "bantony",
//         age: 24,
//       },
//     })
//     .mockResolvedValueOnce({
//       data: {
//         name: "sonu",
//         age: 28,
//       },
//     })
//     .mockRejectedValueOnce(new Error("network error"));

//   const firstApi = await api();
//   const secondApi = await api();

//   expect(firstApi).toEqual({
//     name: "bantony",
//     age: 24,
//   });

//   expect(secondApi).toEqual({
//     name: "sonu",
//     age: 28,
//   });

//   await expect(api()).rejects.toThrow("network error");
// });

// test("should handle 401 error", async () => {
//   jest.spyOn(axios, "get").mockRejectedValueOnce({
//     response: {
//       status: 401,
//       data: {
//         message: "Unauthorized",
//       },
//     },
//   });

//   await expect(api()).rejects.toMatchObject({
//     response: {
//       status: 401,
//     },
//   });
// });

test("retrun string", async () => {
  await expect(getUserAge()).resolves.toBe(24);
});

test("retrun string", async () => {
  await expect(getUser()).rejects.toThrow("User not found");
});

test("retrun string", async () => {
  const data = await twoData();

  expect(data).toEqual(["ban", "tony"]);
});
