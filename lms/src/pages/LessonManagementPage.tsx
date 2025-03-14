import React from "react";
import LessonListComponent from "../components/LessonManagement/LessonListComponent";
import UploadLessonComponent from "../components/LessonManagement/UploadLessonComponent";

const LessonManagementPage: React.FC<{ role: string }> = ({ role }) => {
  return (
    <div>
      <h1>Lesson Management</h1>
      {role === "Teacher" && <UploadLessonComponent />}
      <LessonListComponent role={role} />
    </div>
  );
};

export default LessonManagementPage;
