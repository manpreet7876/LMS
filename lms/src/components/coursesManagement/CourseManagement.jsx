import React, { useState } from "react";
import CourseForm from "./CourseForm";
import CourseList from "./CourseList";
import "./CourseManagement.css";

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);

  // Add Course
  const addCourse = (course) => {
    setCourses([...courses, { id: Date.now(), ...course }]);
  };

  // Update Course
  const updateCourse = (updatedCourse) => {
    setCourses(courses.map(course => course.id === updatedCourse.id ? updatedCourse : course));
    setEditingCourse(null);
  };

  // Delete Course
  const deleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div className="course-management">
      <h2>Course Management</h2>
      <CourseForm addCourse={addCourse} updateCourse={updateCourse} editingCourse={editingCourse} />
      <CourseList courses={courses} deleteCourse={deleteCourse} setEditingCourse={setEditingCourse} />
    </div>
  );
};

export default CourseManagement;
