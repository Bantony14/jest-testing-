interface User {
  name: string;
  age: number;
}
export async function api(): Promise<User> {
  const response = await fetch("/api/user");
  return response.json();
}
