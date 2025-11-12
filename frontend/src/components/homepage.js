import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";

function HomePage() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Fetch all courses publicly (no token needed)
        const response = await API.get("/course/");
        setCourses(response.data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="container mt-5">
      {/* Header with Login/Register */}
      <div className="d-flex justify-content-end mb-4">
        <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
        <Link to="/register" className="btn btn-primary">Register</Link>
      </div>

      <h2 className="mb-4">All Courses</h2>

      {courses.length === 0 ? (
        <p>No courses available at the moment.</p>
      ) : (
        <div className="list-group">
          {courses.map((course) => (
            <div key={course.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{course.code}</strong> - {course.title}
                <p className="mb-0 text-muted">{course.description}</p>
              </div>
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => {
                  // Redirect to login if user is not logged in
                  const user = localStorage.getItem("user");
                  if (!user) {
                    navigate("/login");
                  } else {
                    navigate(`/courses/${course.id}`);
                  }
                }}
              >
                View Course
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
