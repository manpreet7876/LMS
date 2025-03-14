import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to the Learning Management System</h1>
        <p>Enhance your learning with interactive courses and real-time notifications.</p>
      </header>
      <div className="home-buttons">
        <Link to="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
        <Link to="/notifications" className="btn btn-secondary">View Notifications</Link>
      </div>
    </div>
  );
}

export default HomePage;
