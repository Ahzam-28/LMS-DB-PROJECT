
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Login({ setUser }) {   // ✅ Receive setUser
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("login/", {
        username: formData.username,
        password: formData.password,
      });

      // Save token
      localStorage.setItem("token", response.data.token);

      // ✅ Save full user object
      const userData = {
        username: response.data.username,
        role: response.data.role,
        profile: response.data.profile,
      };
      localStorage.setItem("user", JSON.stringify(userData));

      // ✅ Update App state
      setUser(userData);

      alert("Login Successful!");

      // Redirect
      if (response.data.role === "student") {
        navigate("/student-dashboard");
      } else {
        navigate("/teacher-dashboard");
      }

    } catch (error) {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?{" "}
        <button onClick={() => navigate("/register")}>Register Here</button>
      </p>
    </div>
  );
}

export default Login;

