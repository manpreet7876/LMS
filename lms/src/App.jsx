import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseManagement from "./components/coursesManagement/CourseManagement";
import "./App.css";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseManagement />} />
      </Routes>
    </Router>
  )
}

export default App;
