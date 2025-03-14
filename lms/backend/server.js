const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

let notifications = [
  { id: 1, message: "New course available!", read: false },
  { id: 2, message: "Assignment deadline extended.", read: false },
];

// API to get notifications
app.get("/notifications", (req, res) => {
  res.json(notifications);
});

// API to mark as read
app.post("/notifications/:id/read", (req, res) => {
  const { id } = req.params;
  notifications = notifications.map(n =>
    n.id === parseInt(id) ? { ...n, read: true } : n
  );
  res.send("Notification marked as read");
});

// WebSocket for real-time notifications
io.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("sendNotification", (message) => {
    const newNotification = { id: notifications.length + 1, message, read: false };
    notifications.unshift(newNotification);
    io.emit("newNotification", newNotification);
  });

  socket.on("disconnect", () => console.log("User disconnected"));
});

server.listen(5000, () => console.log("Server running on port 5000"));
