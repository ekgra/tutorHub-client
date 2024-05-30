import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

const courses = [
  { id: 1, title: 'Course 1' },
  { id: 2, title: 'Course 2' },
  { id: 3, title: 'Course 3' },
];

const Courses = () => {
  return (
    <Container className="mt-4">
      <Row>
        {courses.map(course => (
          <Col key={course.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>Course Information</Card.Text>
                <Button variant="primary">Enroll</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
