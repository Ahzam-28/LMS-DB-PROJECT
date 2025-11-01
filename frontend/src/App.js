import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  // ✅ Load user from localStorage when page reloads
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <Router>
      <Routes>
        {!user ? (
          <>
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/student-dashboard" element={<Dashboard user={user} setUser={setUser} />} />
            <Route path="/teacher-dashboard" element={<Dashboard user={user} setUser={setUser} />} />
            <Route path="*" element={<Navigate to={user.role === "student" ? "/student-dashboard" : "/teacher-dashboard"} />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
