import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <image src="../../assets/background.png" alt="About Us" fluid className="about-us-image" />
          </Col>
          <Col md={6} className="text-center">
            <h2 className="about-us-header">About Our Club</h2>
            <p className="about-us-text">We are a community of students who love coding and building cool projects together. Our club is open to students of all levels, from beginners to experienced developers.</p>
            <p className="about-us-text">We believe that learning to code should be fun and collaborative. That's why we organize regular meetups, workshops, and hackathons to bring our members together and provide opportunities for them to learn and grow.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
