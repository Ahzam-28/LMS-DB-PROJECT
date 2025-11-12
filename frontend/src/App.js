import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import CourseDetail from "./components/CourseDetail";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Login/Register pages accessible even if logged in */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />

        {/* Course details - login required */}
        <Route
          path="/courses/:id"
          element={user ? <CourseDetail /> : <Navigate to="/login" replace />}
        />

        {/* Dashboards */}
        {user?.role === "student" && (
          <Route path="/student-dashboard" element={<Dashboard user={user} setUser={setUser} />} />
        )}
        {user?.role === "teacher" && (
          <Route path="/teacher-dashboard" element={<Dashboard user={user} setUser={setUser} />} />
        )}

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
