import React from 'react';

const CourseSelector = ({ selectedCourse, setSelectedCourse }) => {
  const courses = ["Programming", "Networking", "Cybersecurity", "Databases"];

  return (
    <div className="text-center mt-4">
      <h3>Select a Course</h3>
      <select
        className="form-select w-75 mx-auto mt-2"
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
      >
        <option value="">-- Choose a Course --</option>
        {courses.map((course, index) => (
          <option key={index} value={course}>{course}</option>
        ))}
      </select>
    </div>
  );
};

export default CourseSelector;
