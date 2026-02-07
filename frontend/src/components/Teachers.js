import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "./Teachers.css";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        setLoading(true);
        const res = await API.get("/teacher/");
        setTeachers(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Failed to load teachers:", err);
        setError("Failed to load teachers");
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div className="teachers-page">
      <div className="teachers-header">
        <h1>Our Expert Instructors</h1>
        <p>Learn from professionals with real-world experience</p>
      </div>

      <div className="container">
        {loading ? (
          <div className="loading-message">Loading teachers...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : teachers.length === 0 ? (
          <div className="no-data-message">No teachers available at the moment.</div>
        ) : (
          <div className="teachers-grid">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="teacher-card-large"
                onClick={() => navigate(`/teacher/${teacher.id}`)}
              >
                <div className="teacher-card-header">
                  <div className="teacher-avatar-large">
                    <i className="fas fa-user-circle"></i>
                  </div>
                </div>
                <div className="teacher-card-body">
                  <h3 className="teacher-name">
                    {teacher.user?.first_name} {teacher.user?.last_name}
                  </h3>
                  <p className="teacher-expertise">
                    {teacher.expertise || "Experienced Instructor"}
                  </p>
                  <p className="teacher-experience">
                    {teacher.experience || 0} years experience
                  </p>
                  <p className="teacher-bio">{teacher.bio || "No bio available"}</p>
                  <button className="btn btn-primary btn-sm">View Profile</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
