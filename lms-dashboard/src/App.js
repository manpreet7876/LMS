import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TeacherDashboard from "./components/TeacherDashboard";
import CourseManagement from "./components/CourseManagement";
import LessonManagement from "./components/LessonManagement";
import QuizAssignment from "./components/QuizAssignment";
import ProgressTracking from "./components/ProgressTracking";
import DiscussionForum from "./components/DiscussionForum";
import Notifications from "./components/Notifications";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeacherDashboard />} />
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





