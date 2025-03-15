import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LessonManagementPage from "../../src/pages/LessonManagementPage";

const LessonRoutes: React.FC<{ role: string }> = ({ role }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lessons" element={<LessonManagementPage role={role} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default LessonRoutes;
