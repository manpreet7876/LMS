import React, { useEffect, useState } from "react";
import { LessonService } from "./LessonService";
import { Lesson } from "../../models/LessonModel";

const LessonListComponent: React.FC<{ role: string }> = ({ role }) => {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    setLessons(LessonService.getLessons());
  }, []);

  const handleDelete = (id: string) => {
    if (role !== "Teacher") {
      alert("Only teachers can delete lessons.");
      return;
    }

    LessonService.deleteLesson(id);
    setLessons(LessonService.getLessons());
  };

  return (
    <div>
      <h2>All Lessons</h2>
      {lessons.map((lesson) => (
        <div key={lesson.id} className="lesson-card">
          <h3>{lesson.title}</h3>
          <p>{lesson.description}</p>
          <a href={lesson.fileUrl} download>Download File</a>
          {role === "Teacher" && (
            <button onClick={() => handleDelete(lesson.id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default LessonListComponent;
