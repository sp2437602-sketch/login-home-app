import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin(event) {
    event.preventDefault();

    if (username.trim() !== "" && password.trim() !== "") {
      setLoggedIn(true);
    } else {
      alert("Please enter username and password");
    }
  }

  function handleLogout() {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  }

  if (loggedIn) {
    return (
      <div className="home-container">
        <nav className="navbar">
          <h2>MyWebsite</h2>
          <button onClick={handleLogout}>Logout</button>
        </nav>

        <div className="welcome-card">
          <h1>Welcome, {username}!</h1>
          <p>You have successfully logged in to your home page.</p>
          <h3>Welcome to Our Website</h3>
          <p>Explore our website and enjoy your experience.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h1>Welcome Back!</h1>
        <p className="subtitle">Please log in to continue</p>

        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Login</button>

        <p className="footer-text">Login Page Using React.js</p>
      </form>
    </div>
  );
}

export default App;