import React, { useState, useEffect } from "react";
import { Table, Button, Container, Form, Modal } from "react-bootstrap";
import "../styles/StudentDashboard.css";

const StudentDashboard = () => {
    const [courses, setCourses] = useState(JSON.parse(localStorage.getItem("courses")) || []);
    const [enrolledCourses, setEnrolledCourses] = useState(JSON.parse(localStorage.getItem("enrolledCourses")) || []);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [rating, setRating] = useState(5);
    const [feedback, setFeedback] = useState("");
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [assignment, setAssignment] = useState(null);
    const [showCourseModal, setShowCourseModal] = useState(false);

    useEffect(() => {
        localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
    }, [enrolledCourses]);

    const enrollCourse = (course) => {
        if (!enrolledCourses.some((c) => c.id === course.id)) {
            setEnrolledCourses([...enrolledCourses, { ...course, assignment: null, userRating: null }]);
        }
    };

    const openRatingModal = (course) => {
        setSelectedCourse(course);
        setRating(course.userRating || 5);
        setShowRatingModal(true);
    };

    const submitRating = () => {
        const updatedCourses = enrolledCourses.map((course) =>
            course.id === selectedCourse.id ? { ...course, userRating: rating } : course
        );
        setEnrolledCourses(updatedCourses);
        setShowRatingModal(false);
    };

    const openUploadModal = (course) => {
        setSelectedCourse(course);
        setShowUploadModal(true);
    };

    const uploadAssignment = () => {
        if (!assignment) return;

        const updatedCourses = enrolledCourses.map((course) =>
            course.id === selectedCourse.id ? { ...course, assignment: assignment.name } : course
        );
        setEnrolledCourses(updatedCourses);
        setShowUploadModal(false);
        setAssignment(null);
    };

    return (
        <Container>
            <h2 className="my-4">Student Dashboard</h2>

            <h4>Available Courses</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Course Name</th>
                        <th>Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course, index) => (
                        <tr key={course.id}>
                            <td>{index + 1}</td>
                            <td>{course.name}</td>
                            <td>{course.rating} ⭐ ({course.ratingCount} ratings)</td>
                            <td>
                                <Button
                                    variant="primary"
                                    size="sm"
                                    onClick={() => enrollCourse(course)}
                                    disabled={enrolledCourses.some((c) => c.id === course.id)}
                                >
                                    {enrolledCourses.some((c) => c.id === course.id) ? "Enrolled" : "Enroll"}
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <h4 className="mt-4">My Courses</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Course Name</th>
                        <th>Assignment</th>
                        <th>Rate Course</th>
                    </tr>
                </thead>
                <tbody>
                    {enrolledCourses.map((course, index) => (
                        <tr key={course.id}>
                            <td>{index + 1}</td>
                            <td>{course.name}</td>
                            <td>
                                {course.assignment ? course.assignment : "No submission"}
                                <Button variant="info" size="sm" onClick={() => openUploadModal(course)} className="ms-2">
                                    {course.assignment ? "Re-upload" : "Upload"}
                                </Button>
                            </td>
                            <td>
                                <Button variant="warning" size="sm" onClick={() => openRatingModal(course)}>
                                    Rate
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Upload Assignment Modal */}
            <Modal show={showUploadModal} onHide={() => setShowUploadModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Assignment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Select Assignment</Form.Label>
                        <Form.Control type="file" onChange={(e) => setAssignment(e.target.files[0])} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowUploadModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={uploadAssignment}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Rating Modal */}
            <Modal show={showRatingModal} onHide={() => setShowRatingModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Rate {selectedCourse?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                            as="select"
                            value={rating}
                            onChange={(e) => setRating(parseInt(e.target.value))}
                        >
                            {[1, 2, 3, 4, 5].map((star) => (
                                <option key={star} value={star}>{"⭐".repeat(star)}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowRatingModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={submitRating}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default StudentDashboard;


