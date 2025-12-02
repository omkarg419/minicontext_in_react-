import React, { useState } from "react";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handeleSubmit = (e) => {
    // prevent page reload
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder="Username"
      />
      {"   "}

      <input
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="Password"
      />
        {"   "}
        <button onClick={handeleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
