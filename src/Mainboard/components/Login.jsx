import React, { useState } from "react";
import { API_URL } from "../data/apiPath";
import { InfinitySpin } from "react-loader-spinner";

function Login({ showWelcomeHandler, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        alert("Login Successful!");
        localStorage.setItem("loginToken", data.token);

        setEmail("");
        setPassword("");

        
        if (onLoginSuccess) onLoginSuccess();

        showWelcomeHandler();
      } else {
        alert(data.error || "Invalid credentials");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Login Failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="loginSection">
        {loading && (
          <div className="loaderSection">
            <InfinitySpin
              visible={true}
              width="200"
              color="#4fa94d"
              ariaLabel="infinity-spin-loading"
            />
            <p>Login In Process...Please Wait</p>
          </div>
        )}

        {!loading && (
          <form className="authForm" onSubmit={loginHandler} autoComplete="off">
            <h3>Admin Login</h3>

            <label>Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              required
            />
            <br />

            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              required
            />
            <br />

            <span className="showPassword" onClick={handleShowPassword}>
              {showPassword ? "Hide" : "Show"}
            </span>

            <div className="btnSubmit">
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default Login;
