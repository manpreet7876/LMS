import React, { useState, useEffect } from "react";
import "./CourseManagement.css";

const CourseForm = ({ addCourse, updateCourse, editingCourse }) => {
  const [course, setCourse] = useState({ title: "", instructor: "", duration: "" });

  useEffect(() => {
    if (editingCourse) {
      setCourse(editingCourse);
    }
  }, [editingCourse]);

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!course.title || !course.instructor || !course.duration) {
      alert("All fields are required!");
      return;
    }
    editingCourse ? updateCourse(course) : addCourse(course);
    setCourse({ title: "", instructor: "", duration: "" });
  };

  return (
    <form className="course-form" onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Course Title" value={course.title} onChange={handleChange} />
      <input type="text" name="instructor" placeholder="Instructor Name" value={course.instructor} onChange={handleChange} />
      <input type="text" name="duration" placeholder="Duration (e.g., 4 weeks)" value={course.duration} onChange={handleChange} />
      <button type="submit">{editingCourse ? "Update Course" : "Add Course"}</button>
    </form>
  );
};

export default CourseForm;
