import React from "react";
import LessonListComponent from "../components/lessonManagement/LessonListComponent";
import UploadLessonComponent from "../components/lessonManagement/UploadLessonComponent";

const LessonManagementPage: React.FC<{ role: string }> = ({ role }) => {
  return (
    <div className="container">
      <h1>Lesson Management</h1>
      {role === "Teacher" && <UploadLessonComponent />}
      <LessonListComponent role={role} />
    </div>
  );
};

export default LessonManagementPage;
