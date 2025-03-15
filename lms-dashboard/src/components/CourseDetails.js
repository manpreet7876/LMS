import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const CourseDetails = () => {
    const location = useLocation();
    const course = location.state?.course;

    if (!course) {
        return <h3 className="text-center">Course not found</h3>;
    }

    return (
        <Container>
            <h2 className="my-4">{course.name}</h2>
            <p><strong>Description:</strong> {course.description || "No description available."}</p>
            <p><strong>Instructor:</strong> {course.instructor || "Unknown"}</p>
            <p><strong>Rating:</strong> {course.rating} ⭐ ({course.ratingCount} ratings)</p>
            
            <Button variant="primary">Start Learning</Button>
        </Container>
    );
};

export default CourseDetails;
