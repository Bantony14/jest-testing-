import { useEffect, useState } from "react";
import axios from "axios";

// function Profile() {
//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setShowButton(true);
//     }, 100);
//   }, []);

//   return (
//     <div>
//       <h1>Bantony</h1>

//       {showButton && <button>Logout</button>}
//     </div>
//   );
// }

// function Users() {
//   return (
//     <div>
//       <button>Delete</button>
//       <button>Delete</button>
//       <button>Delete</button>
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// function Login() {
//   const [email, setEmail] = useState("");

//   return (
//     <div>
//       <label htmlFor="email">Email</label>

//       <input
//         id="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <p>{email}</p>
//     </div>
//   );
// }

// function Search() {
//   return (
//     <div>
//       <label htmlFor="search">Search</label>
//       <input id="search" defaultValue="Bantony" />
//     </div>
//   );
// }

// function ProfileForm() {
//   return (
//     <div>
//       <label htmlFor="role">Role</label>

//       <select id="role">
//         <option value="frontend">Frontend</option>
//         <option value="backend">Backend</option>
//         <option value="fullstack">Full Stack</option>
//       </select>
//     </div>
//   );
// }

function LoginForm() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("msg");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setMsg("email is not valid");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post("/api/login", {
        email,
      });

      setMsg(response.data.message);
    } catch {
      setMsg("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>

      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <h1>{loading ? "Loading..." : msg}</h1>

      <button type="submit">Login</button>
    </form>
  );
}

export { LoginForm };
