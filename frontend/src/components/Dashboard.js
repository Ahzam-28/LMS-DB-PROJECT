

import React, { useEffect, useState } from "react";
import API from "../api";

function Dashboard({ user, setUser }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const endpoint = user.role === "student" ? "../enrollment/" : "../course/";
        const response = await API.get(endpoint, {
          headers: { Authorization: `Token ${localStorage.getItem("token")}` }
        });
        setCourses(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCourses();
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setUser(null);
  };

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <p>Role: {user.role}</p>

      <h3>Profile Info:</h3>
      <ul>
        <li>Qualification: {user.profile.qualification}</li>
        <li>Mobile No: {user.profile.mobile_no}</li>
        {user.role === "student" && <li>Interested Categories: {user.profile.interested_categories}</li>}
        {user.role === "teacher" && <li>experience: {user.profile.experience}</li>}
      </ul>

      <h3>{user.role === "student" ? "Enrolled Courses" : "Courses Teaching"}:</h3>
      <ul>
        {courses.map((c, index) => (
          <li key={index}>{user.role === "student" ? c.course.code + " - " + c.course.title : c.code + " - " + c.title}</li>
        ))}
      </ul>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
