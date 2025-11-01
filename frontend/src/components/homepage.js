import React, { useEffect, useState } from "react";
import axios from "axios";

function Homepage() {
  const [courses, setCourses] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/course/")
      .then((response) => setCourses(response.data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"} style={{ minHeight: "100vh", padding: "20px" }}>
      
      {/* Header + Toggle */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>All Courses</h1>
        <button className="btn btn-outline-primary" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Course Cards */}
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4 mb-4" key={course.id}>
            <div className={`card h-100 ${darkMode ? "bg-secondary text-white" : ""}`}>
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <span className="badge bg-primary">{course.code}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Homepage;

