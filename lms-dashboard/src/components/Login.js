import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";

const Login = () => {
    const [role, setRole] = useState("student"); // Default role is student
    const [pin, setPin] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Hardcoded PINs for authentication (Replace with a proper backend later)
    const correctPins = {
        student: "1111", // Student PIN
        teacher: "1234"  // Teacher PIN
    };

    const handleLogin = () => {
        if (pin === correctPins[role]) {
            localStorage.setItem("authRole", role);
            navigate(role === "teacher" ? "/teacher-dashboard" : "/student-dashboard");
        } else {
            setError("Invalid PIN. Please try again.");
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="mb-4">Login</h2>
            
            {error && <Alert variant="danger">{error}</Alert>}

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Select Role:</Form.Label>
                    <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Enter PIN:</Form.Label>
                    <Form.Control 
                        type="password" 
                        value={pin} 
                        onChange={(e) => setPin(e.target.value)} 
                        placeholder="Enter PIN"
                    />
                </Form.Group>

                <Button variant="primary" onClick={handleLogin}>
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;
