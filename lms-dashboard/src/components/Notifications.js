
import React, { useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";
import "./Notifications.css"; // Ensure this file exists

const socket = io("http://localhost:5000"); // Update URL if backend runs on a different port

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/notifications")
      .then(response => setNotifications(response.data))
      .catch(error => console.error("Error fetching notifications:", error));

    socket.on("newNotification", (notification) => {
      setNotifications((prev) => [notification, ...prev]);
    });

    return () => socket.off("newNotification");
  }, []);

  const markAsRead = (id) => {
    axios.post(`http://localhost:5000/notifications/${id}/read`)
      .then(() => {
        setNotifications(notifications.map(n => 
          n.id === id ? { ...n, read: true } : n
        ));
      })
      .catch(error => console.error("Error marking as read:", error));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Notifications</h2>
      <ul className="list-group">
        {notifications.map((n) => (
          <li key={n.id} className={`list-group-item ${n.read ? "text-muted" : "fw-bold"}`}>
            <p>{n.message}</p>
            {!n.read && (
              <button className="btn btn-primary btn-sm" onClick={() => markAsRead(n.id)}>
                Mark as Read
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
