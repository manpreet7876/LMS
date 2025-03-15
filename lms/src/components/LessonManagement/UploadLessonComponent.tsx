import React, { useState } from "react";
import { LessonService } from "./LessonService";
import { Lesson } from "../../models/LessonModel";

const UploadLessonComponent: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (!file) return alert("Please select a file");

    const newLesson: Lesson = {
      id: new Date().toISOString(),
      title,
      description,
      fileUrl: URL.createObjectURL(file),
      uploadedBy: "Teacher",
      uploadedAt: new Date(),
    };

    LessonService.addLesson(newLesson);
    alert("Lesson uploaded successfully!");
    window.location.reload(); // Refresh lesson list
  };

  return (
    <div>
      <h2>Upload Lesson</h2>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload}>Upload Lesson</button>
    </div>
  );
};

export default UploadLessonComponent;
