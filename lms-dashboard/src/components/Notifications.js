//import React from "react";
//const Notifications = () => <h2 className="text-center mt-5">Notification  Page</h2>;
//export default Notifications;
import React, { useState } from "react";
import { Card, Button, Form, Row, Col, Alert } from "react-bootstrap";
import { Bell, PlusCircle } from "lucide-react";

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: "Assignment", message: "New assignment uploaded for Math 101", date: "2025-03-15" },
    { id: 2, type: "Exam", message: "Exam schedule updated for Physics", date: "2025-03-14" },
    { id: 3, type: "Announcement", message: "School holiday on March 20", date: "2025-03-13" },
  ]);

  const [filter, setFilter] = useState("All");
  const [newNotification, setNewNotification] = useState({ type: "", message: "" });

  const filteredNotifications =
    filter === "All" ? notifications : notifications.filter((notification) => notification.type === filter);

  const handleAddNotification = () => {
    if (newNotification.type && newNotification.message) {
      const newNotif = {
        id: notifications.length + 1,
        type: newNotification.type,
        message: newNotification.message,
        date: new Date().toISOString().split("T")[0],
      };
      setNotifications([newNotif, ...notifications]);
      setNewNotification({ type: "", message: "" });
    }
  };

  return (
    <div className="container mt-4">
      {/* Header */}
      <h2 className="mb-3">
        <Bell size={30} className="me-2 text-primary" />
        Notifications
      </h2>

      {/* Filter Buttons */}
      <div className="mb-3">
        {["All", "Assignment", "Exam", "Announcement"].map((type) => (
          <Button
            key={type}
            variant={filter === type ? "primary" : "outline-primary"}
            className="me-2"
            onClick={() => setFilter(type)}
          >
            {type}
          </Button>
        ))}
      </div>

      {/* Add Notification Form */}
      <Card className="p-3 mb-4">
        <h5>Add Notification</h5>
        <Row className="mb-2">
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Type (e.g., Assignment, Exam, Announcement)"
              value={newNotification.type}
              onChange={(e) => setNewNotification({ ...newNotification, type: e.target.value })}
            />
          </Col>
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Notification message"
              value={newNotification.message}
              onChange={(e) => setNewNotification({ ...newNotification, message: e.target.value })}
            />
          </Col>
          <Col md={2}>
            <Button variant="success" onClick={handleAddNotification}>
              <PlusCircle size={18} className="me-1" />
              Add
            </Button>
          </Col>
        </Row>
      </Card>

      {/* Notifications List */}
      {filteredNotifications.length > 0 ? (
        filteredNotifications.map((notification) => (
          <Alert
            key={notification.id}
            variant={notification.type === "Assignment" ? "info" : notification.type === "Exam" ? "danger" : "warning"}
          >
            <strong>{notification.type}:</strong> {notification.message} <br />
            <small className="text-muted">{notification.date}</small>
          </Alert>
        ))
      ) : (
        <Alert variant="secondary">No notifications available.</Alert>
      )}
    </div>
  );
};

export default NotificationPage;
