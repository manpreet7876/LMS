import React from "react";
import "./CourseManagement.css";

const CourseList = ({ courses, deleteCourse, setEditingCourse }) => {
  return (
    <div className="course-list">
      {courses.length === 0 ? (
        <p>No courses available. Add a new course.</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course.id} className="course-item">
              <h3>{course.title}</h3>
              <p>Instructor: {course.instructor}</p>
              <p>Duration: {course.duration}</p>
              <button onClick={() => setEditingCourse(course)}>Edit</button>
              <button onClick={() => deleteCourse(course.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseList;
