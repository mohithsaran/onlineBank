import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/api/login", loginData);
      navigate("/account-details");
    } catch (error) {
      console.error("Login failed", error);
      setLoginError("Invalid username or password. Please try again.");
    }
    console.log(loginData);
  };
  const handleClear = () => {
    setLoginData({
      username: "",
      password: "",
    });
  };

  return (
    <div className="login-container">
      <div className="image-login-container"></div>
      <div className="text-login-container">
        <form onSubmit={handleLogin}>
          <label>Username:</label>
          <input
            type="text"
            value={loginData.username}
            onChange={(e) =>
              setLoginData({ ...loginData, username: e.target.value })
            }
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            maxLength={8}
            required
          />
          <h3 className="error-msg">{loginError}</h3>
          <button type="submit">Login</button>
          <button type="submit" onClick={handleClear}>
            Clear
          </button>
        </form>
        <p>Welcome back! Log in to manage your finances securely. </p>
        <p> If you're new here, sign up for an account to get started. </p>
        <p>Explore our features to make the most of your banking experience.</p>
        <p>We prioritize your security.</p>
        <p>Rest assured, your data is safe with us.</p>
        <p>24/7 customer support is available. Contact us for assistance.</p>
      </div>
    </div>
  );
};

export default Login;
