import React from "react";
import { Link } from "react-router-dom";
import { Bell } from "react-bootstrap-icons";
import "./Navbar.css";

function Navbar({ unreadCount }) {
  return (
    <nav className="navbar">
      <h2>LMS</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li>
          <Link to="/notifications">
            <Bell className="notification-icon" />
            {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
