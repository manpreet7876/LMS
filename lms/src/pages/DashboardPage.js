import React from "react";
import { Link } from "react-router-dom";

function DashboardPage() {
  return (
    <div className="dashboard-container">
      <header>
        <h2>📚 Your Dashboard</h2>
        <p>Manage your courses, track progress, and stay updated.</p>
      </header>

      <div className="dashboard-buttons">
        <Link to="/notifications" className="btn btn-warning">🔔 Notifications</Link>
        <Link to="/" className="btn btn-danger">🏠 Home</Link>
      </div>
    </div>
  );
}

export default DashboardPage;
