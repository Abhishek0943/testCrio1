// import "./styles.css";

import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "user" && password === "password") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      {!isLoggedIn ? (
        <div>
          <form action="" onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <p>Welcome, user!</p>
      )}
    </div>
  );
}
