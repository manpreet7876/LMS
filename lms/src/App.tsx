import { useState, useEffect, JSX } from 'react';
import "../src/components/LessonManagement/lessonManagement.css";
import React from 'react';

type Lesson = {
  id: number;
  title: string;
  videoUrl: string;
  notes: string;
};

function App(): JSX.Element {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [title, setTitle] = useState<string>('');
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  // Load data from Local Storage when page loads
  useEffect(() => {
    const savedLessons = JSON.parse(localStorage.getItem('lessons') || '[]');
    setLessons(savedLessons);
  }, []);

  // Save to Local Storage whenever lessons change
  useEffect(() => {
    localStorage.setItem('lessons', JSON.stringify(lessons));
  }, [lessons]);

  const handleAddLesson = (): void => {
    if (!title || !videoUrl || !notes) return;

    const newLesson: Lesson = {
      id: Date.now(),
      title,
      videoUrl,
      notes,
    };

    setLessons([...lessons, newLesson]);
    setTitle('');
    setVideoUrl('');
    setNotes('');
  };

  const handleDeleteLesson = (id: number): void => {
    const updatedLessons = lessons.filter(lesson => lesson.id !== id);
    setLessons(updatedLessons);
  };

  return (
    <div className="container">
      <h1>Lesson Management Page</h1>

      {/* For Teacher to Add Video and Notes */}
      <div>
        <input 
          type="text" 
          placeholder="Lesson Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Video URL" 
          value={videoUrl} 
          onChange={(e) => setVideoUrl(e.target.value)} 
        />
        <textarea 
          placeholder="Notes..." 
          value={notes} 
          onChange={(e) => setNotes(e.target.value)} 
        />
        <button onClick={handleAddLesson}>Upload Lesson</button>
      </div>

      {/* For Both Teacher & Student to View, Download, and Delete */}
      <h2>All Lessons</h2>
      {lessons.map((lesson) => (
        <div key={lesson.id} className="lesson-card">
          <h3>{lesson.title}</h3>
          <a href={lesson.videoUrl} target="_blank" rel="noopener noreferrer">Watch Video</a>
          <p>{lesson.notes}</p>
          <a 
            href={`data:text/plain;charset=utf-8,${encodeURIComponent(lesson.notes)}`} 
            download={`${lesson.title}-notes.txt`}
          >
            Download Notes
          </a>
          <button className="delete-btn" onClick={() => handleDeleteLesson(lesson.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
