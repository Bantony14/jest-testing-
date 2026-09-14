import axios from "axios";

// interface User {
//   name: string;
//   age: number;
// }
// export async function api(): Promise<User> {
//   const response = await fetch("/api/user");
//   return response.json();
// }

interface User {
  name: string;
  age: number;
}
export async function api(): Promise<User> {
  const response = await axios.get("/api/user");
  return response.data;
}

export async function createUser(user: User): Promise<User> {
  const response = await axios.post("/api/user", user);

  return response.data;
}

export async function getUserAge(): Promise<number> {
  return 24;
}

export async function getUser(): Promise<string> {
  throw new Error("User not found");
}

export async function twoData(): Promise<string[]> {
  const [first, second] = await Promise.all([
    Promise.resolve("ban"),
    Promise.resolve("tony"),
  ]);

  return [first, second];
}
