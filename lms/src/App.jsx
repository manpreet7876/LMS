import { useState } from "react";
import Notifications from "./components/Notifications";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="navbar">
        <h2>LMS System</h2>
        <Notifications />
      </header>
      <main>
        <h1>Welcome to LMS</h1>
        <p>Stay updated with notifications!</p>
      </main>
    </div>
  );
}

export default App;
