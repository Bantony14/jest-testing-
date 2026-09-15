import { useEffect, useState } from "react";

function Profile() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 100);
  }, []);

  return (
    <div>
      <h1>Bantony</h1>

      {showButton && <button>Logout</button>}
    </div>
  );
}

function Users() {
  return (
    <div>
      <button>Delete</button>
      <button>Delete</button>
      <button>Delete</button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function Login() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <label htmlFor="email">Email</label>

      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <p>{email}</p>
    </div>
  );
}

function Search() {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input id="search" defaultValue="Bantony" />
    </div>
  );
}

function ProfileForm() {
  return (
    <div>
      <label htmlFor="role">Role</label>

      <select id="role">
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="fullstack">Full Stack</option>
      </select>
    </div>
  );
}

export { Profile, Login, Users, Counter, Search, ProfileForm };
