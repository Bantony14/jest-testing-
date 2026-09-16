import { findByRole, getByRole, render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import {
  Login,
  Profile,
  Users,
  Counter,
  Search,
  ProfileForm,
  LoginForm,
} from "./Profile";
import "@testing-library/jest-dom/jest-globals";
import userEvent from "@testing-library/user-event";
import axios from "axios";

test("sholud be success full api call", async () => {
  jest.spyOn(axios, "post").mockResolvedValue({
    data: {
      message: "Login successful",
    },
  });

  render(<LoginForm />);

  const user = userEvent.setup();

  const input = screen.getByLabelText("Email");
  const btn = screen.getByRole("button", { name: "Login" });

  await user.type(input, "bantonysin95@gmail.com");
  await user.click(btn);

  expect(screen.getByText("Login successful")).toBeInTheDocument();
});
