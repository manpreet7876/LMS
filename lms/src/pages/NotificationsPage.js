import React, { useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";
import "./Notifications.css";

const socket = io("http://localhost:5000");

function NotificationsPage() {
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
    <div className="notifications-page">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((n) => (
          <li key={n.id} className={n.read ? "read" : "unread"}>
            <p>{n.message}</p>
            {!n.read && <button onClick={() => markAsRead(n.id)}>Mark as Read</button>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationsPage;
