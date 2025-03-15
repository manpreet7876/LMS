import React, { useState } from "react";
import { FaBell } from "react-icons/fa"; 
import "./Notifications.css"; 

function Notifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New assignment uploaded!", read: false },
    { id: 2, message: "Quiz results are out!", read: false },
    { id: 3, message: "New discussion in the forum!", read: false },
  ]);

  // Count unread notifications
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Function to mark notifications as read
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  return (
    <div className="notifications-container">
      <div className="notification-icon">
        <FaBell className="bell-icon" />
        {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
      </div>

      <div className="notification-dropdown">
        <h3>🔔 Notifications</h3>
        {notifications.length === 0 ? (
          <p>No new notifications</p>
        ) : (
          <ul>
            {notifications.map((n) => (
              <li key={n.id} className={n.read ? "read" : "unread"}>
                {n.message}
                {!n.read && (
                  <button onClick={() => markAsRead(n.id)}>Mark as Read</button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Notifications;
