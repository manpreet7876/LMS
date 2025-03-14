import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LessonManagementPage from "../pages/LessonManagementPage";

const LessonRoutes: React.FC<{ role: string }> = ({ role }) => {
  return (
    <Router>
      <Routes>
        <Route path="/lessons" element={<LessonManagementPage role={role} />} />
      </Routes>
    </Router>
  );
};

export default LessonRoutes;
