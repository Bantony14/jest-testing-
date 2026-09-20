import {
  findByRole,
  getByRole,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { test, expect } from "@jest/globals";
import { LoginForm } from "./Profile";
import "@testing-library/jest-dom/jest-globals";
import userEvent from "@testing-library/user-event";
import axios from "axios";

// test("should show welcome message", () => {
//   render(<Profile />);

//   expect(screen.getByText("Bantony")).toBeInTheDocument();
//   expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
//   expect(screen.getByText("React + TypeScript")).toBeInTheDocument();
// });

// test("should show logout button", () => {
//   render(<Profile />);

//   expect(screen.getByRole("button", { name: "Logout" })).toBeInTheDocument();
// });

// test("should show logout button", () => {
//   render(<Login />);

//   expect(screen.getByLabelText("Email")).toBeInTheDocument();
//   expect(screen.getByPlaceholderText("Search products")).toBeInTheDocument();
// });

// test("should not show login button", () => {
//   render(<Login />);
//   expect(
//     screen.queryByRole("button", { name: "Logout" }),
//   ).not.toBeInTheDocument();
// });

// test("should show logout button", async () => {
//   render(<Profile />);

//   const button = await screen.findByRole("button", {
//     name: "Logout",
//   });

//   expect(button).toBeInTheDocument();
// });

// test("should show logout button1", () => {
//   render(<Users />);

//   const button = screen.getAllByText("Delete");

//   expect(button).toHaveLength(3);
// });

// test("should increment count", async () => {
//   render(<Counter />);

//   const user = userEvent.setup();

//   const button = screen.getByRole("button", { name: "Increment" });

//   await user.click(button);

//   expect(screen.getByText("Count: 1")).toBeInTheDocument();
// });

// test("should increment count", async () => {
//   render(<Login />);

//   const user = userEvent.setup();

//   const Input = screen.getByLabelText("Email");

//   await user.type(Input, "bantony");

//   expect(screen.getByText("bantony")).toBeInTheDocument();
// });

// test("should increment count", async () => {
//   render(<Search />);

//   const user = userEvent.setup();

//   const Input = screen.getByLabelText("Search");

//   await user.clear(Input);

//   expect(Input).toHaveValue("");
// });

// test("should select backend role", async () => {
//   render(<ProfileForm />);

//   const user = userEvent.setup();

//   const select = screen.getByLabelText("Role");

//   await user.selectOptions(select, "backend");

//   expect(select).toHaveValue("backend");
// });

// test("should ", async () => {
//   render(<LoginForm />);

//   const user = userEvent.setup();

//   const input = screen.getByLabelText("Email");
//   const loginBtb = screen.getByRole("button", { name: "Login" });

//   await user.type(input, "bantonysin95@gmail.com");
//   await user.click(loginBtb);

//   expect(
//     screen.getByText("email registration successfully"),
//   ).toBeInTheDocument();
// });

// test("should ", async () => {
//   render(<LoginForm />);

//   const user = userEvent.setup();

//   const input = screen.getByLabelText("Email");
//   const loginBtb = screen.getByRole("button", { name: "Login" });

//   await user.type(input, "");
//   await user.click(loginBtb);

//   expect(screen.getByText("email is not valid")).toBeInTheDocument();
// });

// test("sholud be success full api call", async () => {
//   jest.spyOn(axios, "post").mockResolvedValue({
//     data: {
//       message: "Login successful",
//     },
//   });

//   render(<LoginForm />);

//   const user = userEvent.setup();

//   const input = screen.getByLabelText("Email");
//   const btn = screen.getByRole("button", { name: "Login" });

//   await user.type(input, "bantonysin95@gmail.com");
//   await user.click(btn);

//   expect(axios.post).toHaveBeenCalledWith("/api/login", {
//     email: "bantonysin95@gmail.com",
//   });
//   expect(screen.getByText("Login successful")).toBeInTheDocument();
// });

// test("should show error when API call fails", async () => {
//   jest.spyOn(axios, "post").mockRejectedValue(new Error("network Error"));

//   render(<LoginForm />);

//   const user = userEvent.setup();

//   const input = screen.getByLabelText("Email");
//   const btn = screen.getByRole("button", { name: "Login" });

//   await user.type(input, "bantonysin95@gmail.com");
//   await user.click(btn);

//   expect(screen.getByText("Login failed")).toBeInTheDocument();
// });

// test("should be heading loading", async () => {
//   jest.spyOn(axios, "post").mockReturnValue(new Promise(() => {}));

//   render(<LoginForm />);

//   const user = userEvent.setup();

//   const input = screen.getByLabelText("Email");
//   const btn = screen.getByRole("button", { name: "Login" });

//   await user.type(input, "bantonysin95@gmail.com");
//   await user.click(btn);

//   await waitFor(() => {
//     expect(axios.post).toHaveBeenCalled();
//   });
//   expect(screen.getByText("Loading...")).toBeInTheDocument();
// });

// test("should be heading loading", async () => {
//   jest.spyOn(axios, "post").mockImplementation(() => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({
//           data: {
//             message: "Login successful",
//           },
//         });
//       }, 2000);
//     });
//   });

//   render(<LoginForm />);

//   const user = userEvent.setup();

//   const input = screen.getByLabelText("Email");
//   const btn = screen.getByRole("button", { name: "Login" });

//   await user.type(input, "bantonysin95@gmail.com");
//   await user.click(btn);

//   await waitFor(() => {
//     expect(axios.post).toHaveBeenCalled();
//   });
//   expect(
//     await screen.findByText("Login successful", {}, { timeout: 3000 }),
//   ).toBeInTheDocument();
// });

// test("Should be the Every Flow Work Able", async () => {
//   jest.spyOn(axios, "post").mockResolvedValue({
//     data: {
//       message: "Succesfully Login",
//     },
//   });

//   render(<LoginForm />);

//   const user = userEvent.setup();
//   const input = screen.getByLabelText("Email");
//   const loginBtn = screen.getByRole("button", { name: "Login" });

//   await user.type(input, "bantonysingh@gmail.com");
//   await user.click(loginBtn);

//   expect(axios.post).toHaveBeenCalledWith("/api/login", {
//     email: "bantonysingh@gmail.com",
//   });

//   const heading = await screen.findByText("Succesfully Login");

//   expect(heading).toBeInTheDocument();
// });

// test("Should be the Every Flow Work Able", async () => {
//   jest.spyOn(axios, "post").mockRejectedValue(new Error("network Error"));

//   render(<LoginForm />);

//   const user = userEvent.setup();
//   const input = screen.getByLabelText("Email");
//   const loginBtn = screen.getByRole("button", { name: "Login" });

//   await user.type(input, "bantonysingh@gmail.com");
//   await user.click(loginBtn);

//   const heading = await screen.findByText("Login failed");

//   expect(heading).toBeInTheDocument();
// });

test("Should be the Every Flow Work Able", async () => {
  jest.spyOn(axios, "post").mockRejectedValue(new Error("network Error"));

  render(<LoginForm />);

  const user = userEvent.setup();
  const loginBtn = screen.getByRole("button", { name: "Login" });

  await user.click(loginBtn);

  const heading = await screen.findByText("email is not valid");
  expect(axios.post).not.toHaveBeenCalled();

  expect(heading).toBeInTheDocument();
});
