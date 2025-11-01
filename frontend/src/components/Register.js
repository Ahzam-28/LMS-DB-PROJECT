import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "student",
    qualification: "",
    mobile_no: "",
    experience: "",
    interested_categories: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Build payload depending on role
    let payload = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: formData.role,
      qualification: formData.qualification,
      mobile_no: formData.mobile_no,
    };

    if (formData.role === "student") {
      payload.interested_categories = formData.interested_categories;
    } else if (formData.role === "teacher") {
      payload.experience = formData.experience;
    }

    try {
      const response = await API.post("register/", payload);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.error(error.response.data);
      // show actual Django error
      alert(JSON.stringify(error.response.data));
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />

        <select name="role" onChange={handleChange} value={formData.role}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        <input name="qualification" placeholder="Qualification" onChange={handleChange} />
        <input name="mobile_no" placeholder="Mobile No" onChange={handleChange} />

        {formData.role === "student" && (
          <input name="interested_categories" placeholder="Interested Categories" onChange={handleChange} />
        )}
        {formData.role === "teacher" && (
          <input name="experience" placeholder="experience" onChange={handleChange} />
        )}

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account?{" "}
        <button onClick={() => navigate("/login")}>Login Here</button>
      </p>
    </div>
  );
}

export default Register;
