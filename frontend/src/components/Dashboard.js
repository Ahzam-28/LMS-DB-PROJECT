import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Dashboard({ user, setUser }) {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return; // safety check

    const fetchCourses = async () => {
      try {
        if (user.role === "student") {
          const response = await API.get(`/enrollment/?student=${user.profile.id}`);
          setCourses(response.data);
        } else if (user.role === "teacher") {
          const response = await API.get(`/course/?teacher=${user.profile.id}`);
          setCourses(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);       // update App state
    navigate("/");       // redirect to homepage
  };

  if (!user) return null; // safety in case of null user

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Welcome, {user.username}!</h2>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>

      <p><strong>Role:</strong> {user.role}</p>

      <h3>Profile Info:</h3>
      <ul>
        <li>Qualification: {user.profile.qualification}</li>
        <li>Mobile No: {user.profile.mobile_no}</li>
        {user.role === "student" && <li>Interested Categories: {user.profile.interested_categories}</li>}
        {user.role === "teacher" && <li>Experience: {user.profile.experience}</li>}
      </ul>

      <h3>{user.role === "student" ? "Enrolled Courses" : "Courses Teaching"}:</h3>
      <ul>
        {courses.length === 0 ? (
          <p>No courses found.</p>
        ) : (
          courses.map((c, index) => (
            <li key={index}>
              {user.role === "student" ? `${c.course.code} - ${c.course.title}` : `${c.code} - ${c.title}`}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Dashboard;
