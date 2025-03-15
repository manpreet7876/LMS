import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Dummy Components for Pages
const CourseManagement = () => <h2 className="text-center mt-5">Course Management Page</h2>;
const LessonManagement = () => <h2 className="text-center mt-5">Lesson Management Page</h2>;
const QuizAssignment = () => <h2 className="text-center mt-5">Quiz/Assignment Page</h2>;
const ProgressTracking = () => <h2 className="text-center mt-5">Progress Tracking Page</h2>;
const DiscussionForum = () => <h2 className="text-center mt-5">Discussion Forum Page</h2>;
const Notifications = () => <h2 className="text-center mt-5">Notifications Page</h2>;

// Teacher Dashboard Component
const TeacherDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Load courses from localStorage
  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(savedCourses);
  }, []);

  // Add a new course with file upload
  const addCourse = () => {
    const courseName = prompt("Enter course name:");
    if (!courseName) return;

    const newCourse = {
      id: courses.length + 1,
      name: courseName,
      studentsEnrolled: 0,
      documents: selectedFiles,
    };

    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
    setSelectedFiles([]); // Clear selected files after adding a course
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files.map((file) => file.name));
  };

  // Delete a course
  const deleteCourse = (courseId) => {
    const updatedCourses = courses.filter((course) => course.id !== courseId);
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
  };

  // Enroll a student
  const enrollStudent = (courseId) => {
    const updatedCourses = courses.map((course) =>
      course.id === courseId ? { ...course, studentsEnrolled: course.studentsEnrolled + 1 } : course
    );
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Teacher Dashboard</h2>

      {/* Navigation Menu */}
      <div className="d-flex justify-content-center flex-wrap mb-4 gap-2">
        <Link to="/courses" className="btn btn-primary">Course Management</Link>
        <Link to="/lessons" className="btn btn-info">Lesson Management</Link>
        <Link to="/quiz" className="btn btn-warning">Quiz/Assignment</Link>
        <Link to="/progress" className="btn btn-success">Progress Tracking</Link>
        <Link to="/forum" className="btn btn-dark">Discussion Forum</Link>
        <Link to="/notifications" className="btn btn-danger">Notifications</Link>
      </div>

      {/* Add Course Button and File Upload */}
      <div className="mb-3">
        <input type="file" multiple onChange={handleFileChange} className="form-control mb-2" />
        <button className="btn btn-primary" onClick={addCourse}>
          + Add Course
        </button>
      </div>

      {/* Course Table */}
      <div className="table-responsive">
        <table className="table table-striped table-hover shadow">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Course Name</th>
              <th>Students Enrolled</th>
              <th>Documents</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.length > 0 ? (
              courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.id}</td>
                  <td>{course.name}</td>
                  <td>{course.studentsEnrolled}</td>
                  <td>
                    {course.documents && course.documents.length > 0 ? (
                      <ul>
                        {course.documents.map((doc, idx) => (
                          <li key={idx}>{doc}</li>
                        ))}
                      </ul>
                    ) : (
                      "No documents uploaded"
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-info btn-sm me-2"
                      onClick={() => enrollStudent(course.id)}
                    >
                      Enroll Student
                    </button>
                    <button className="btn btn-warning btn-sm me-2">Edit</button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteCourse(course.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No courses available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherDashboard;
