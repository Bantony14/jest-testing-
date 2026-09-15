import { findByRole, getByRole, render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import { Login, Profile, Users, Counter, Search, ProfileForm } from "./Profile";
import "@testing-library/jest-dom/jest-globals";
import userEvent from "@testing-library/user-event";

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

test("should increment count", async () => {
  render(<Search />);

  const user = userEvent.setup();

  const Input = screen.getByLabelText("Search");

  await user.clear(Input);

  expect(Input).toHaveValue("");
});

test("should select backend role", async () => {
  render(<ProfileForm />);

  const user = userEvent.setup();

  const select = screen.getByLabelText("Role");

  await user.selectOptions(select, "backend");

  expect(select).toHaveValue("backend");
});
