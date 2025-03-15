import React, { useState, useEffect } from "react";
import StudentDashboard from "./StudentDashboard";
import TeacherDashboard from "./TeacherDashboard";
import "../styles/Dashboard.css";

import { Button, Container, ToggleButton, ButtonGroup } from "react-bootstrap";

const Dashboard = () => {
    const [role, setRole] = useState(localStorage.getItem("userRole") || "student"); // Default role: student

    // Update localStorage when role changes
    useEffect(() => {
        localStorage.setItem("userRole", role);
    }, [role]);

    return (
        <Container>
            <h2 className="text-center my-4">LMS Dashboard</h2>

            {/* Role Selection Buttons */}
            <ButtonGroup className="d-flex justify-content-center mb-4">
                <ToggleButton
                    type="radio"
                    variant={role === "student" ? "primary" : "outline-primary"}
                    checked={role === "student"}
                    onClick={() => setRole("student")}
                >
                    Student
                </ToggleButton>
                <ToggleButton
                    type="radio"
                    variant={role === "teacher" ? "success" : "outline-success"}
                    checked={role === "teacher"}
                    onClick={() => setRole("teacher")}
                >
                    Teacher
                </ToggleButton>
            </ButtonGroup>

            {/* Render Dashboard Based on Role */}
            {role === "student" ? <StudentDashboard /> : <TeacherDashboard />}
        </Container>
    );
};

export default Dashboard;
