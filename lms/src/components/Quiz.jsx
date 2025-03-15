import React, { useState } from 'react';

const Quiz = ({ selectedCourse }) => {
  const quizData = {
    Programming: [
      { question: "What does 'OOP' stand for?", answer: "Object-Oriented Programming" },
      { question: "What is the time complexity of a binary search?", answer: "O(log n)" },
    ],
    Networking: [
      { question: "What is the full form of TCP/IP?", answer: "Transmission Control Protocol / Internet Protocol" },
      { question: "What device connects multiple networks together?", answer: "Router" },
    ],
    Cybersecurity: [
      { question: "What is Phishing?", answer: "A cyber attack to trick users into revealing sensitive information" },
      { question: "What does 'HTTPS' stand for?", answer: "Hypertext Transfer Protocol Secure" },
    ],
    Databases: [
      { question: "What is SQL used for?", answer: "Managing and querying databases" },
      { question: "What is the difference between SQL and NoSQL?", answer: "SQL uses structured tables, NoSQL is more flexible and document-based" },
    ],
  };

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className="container mt-4">
      <h4 className="text-center">Quizzes for {selectedCourse}</h4>
      {quizData[selectedCourse]?.map((quiz, index) => (
        <div key={index} className="card p-3 mt-2 quiz-card" onClick={() => setSelectedQuestion(quiz)}>
          {quiz.question}
        </div>
      )) || <p className="text-center">No quizzes available</p>}

      {selectedQuestion && (
        <div className="mt-3 p-3 bg-light rounded">
          <h5>Question:</h5>
          <p>{selectedQuestion.question}</p>
          <h6 className="text-success">Answer: {selectedQuestion.answer}</h6>
        </div>
      )}
    </div>
  );
};

export default Quiz;
