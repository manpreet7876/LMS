import React, { useState, useEffect } from 'react';
import CourseSelector from './components/CourseSelector';
import Quiz from './components/Quiz';
import Assignment from './components/Assignment';
import './App.css';

const App = () => {
  const [selectedCourse, setSelectedCourse] = useState(localStorage.getItem("selectedCourse") || "");
  const [view, setView] = useState("quiz");

  useEffect(() => {
    localStorage.setItem("selectedCourse", selectedCourse);
  }, [selectedCourse]);

  return (
    <div className="main-container">
      <div className="container card shadow p-4">
        <h2 className="text-center">LMS - IT Quiz & Assignments</h2>

        <CourseSelector selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} />

        <div className="text-center mt-3">
          <button className={`btn btn-primary me-2 ${view === "quiz" ? "active" : ""}`} onClick={() => setView("quiz")}>
            View Quizzes
          </button>
          <button className={`btn btn-secondary ${view === "assignment" ? "active" : ""}`} onClick={() => setView("assignment")}>
            View Assignments
          </button>
        </div>

        {selectedCourse ? (
          view === "quiz" ? <Quiz selectedCourse={selectedCourse} /> : <Assignment selectedCourse={selectedCourse} />
        ) : (
          <p className="text-center mt-3">Please select a course first.</p>
        )}
      </div>
    </div>
  );
};

export default App;
