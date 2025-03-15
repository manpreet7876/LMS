import React, { useState } from 'react';

const Assignment = ({ selectedCourse }) => {
  const assignmentData = {
    Programming: [
      { question: "Write a Python function to reverse a string.", answer: "Use slicing: str[::-1]" },
    ],
    Networking: [
      { question: "Explain the difference between IPv4 and IPv6.", answer: "IPv4 uses 32-bit addresses, IPv6 uses 128-bit addresses." },
    ],
    Cybersecurity: [
      { question: "Describe how a firewall works.", answer: "It monitors and controls incoming/outgoing network traffic." },
    ],
    Databases: [
      { question: "What are the different types of database normalization?", answer: "1NF, 2NF, 3NF, BCNF, etc." },
    ],
  };

  const [selectedAssignment, setSelectedAssignment] = useState(null);

  return (
    <div className="container mt-4">
      <h4 className="text-center">Assignments for {selectedCourse}</h4>
      {assignmentData[selectedCourse]?.map((assignment, index) => (
        <div key={index} className="card p-3 mt-2 assignment-card" onClick={() => setSelectedAssignment(assignment)}>
          {assignment.question}
        </div>
      )) || <p className="text-center">No assignments available</p>}

      {selectedAssignment && (
        <div className="mt-3 p-3 bg-light rounded">
          <h5>Question:</h5>
          <p>{selectedAssignment.question}</p>
          <h6 className="text-success">Answer: {selectedAssignment.answer}</h6>
        </div>
      )}
    </div>
  );
};

export default Assignment;
