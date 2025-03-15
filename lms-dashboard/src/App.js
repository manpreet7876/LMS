import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TeacherDashboard from "./components/TeacherDashboard";
import StudentDashboard from "./components/StudentDashboard";
import Dashboard from "./components/Dashboard"; // Unified Dashboard
import CourseManagement from "./components/CourseManagement";
import LessonManagement from "./components/LessonManagement";
import QuizAssignment from "./components/QuizAssignment";
import ProgressTracking from "./components/ProgressTracking";
import DiscussionForum from "./components/DiscussionForum";
import Notifications from "./components/Notifications";

const App = () => {
  const [role, setRole] = useState(null); // Role state (null, "student", "teacher")

  return (
    <Router>
      <Routes>
        {/* Unified Dashboard with Toggle */}
        <Route path="/" element={<Dashboard role={role} setRole={setRole} />} />

        {/* Redirect to respective dashboards */}
        <Route path="/teacher" element={role === "teacher" ? <TeacherDashboard /> : <Navigate to="/" />} />
        <Route path="/student" element={role === "student" ? <StudentDashboard /> : <Navigate to="/" />} />

        {/* Other Routes */}
        <Route path="/courses" element={<CourseManagement />} />
        <Route path="/lessons" element={<LessonManagement />} />
        <Route path="/quiz" element={<QuizAssignment />} />
        <Route path="/progress" element={<ProgressTracking />} />
        <Route path="/forum" element={<DiscussionForum />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
};

export default App;
