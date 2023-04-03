import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <Container className="h-100">
        <Row className="align-items-center h-100">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="hero-header">Join Our Student Coding Club</h1>
            <p className="hero-subtext">We are a community of students who love coding and building cool projects together. Whether you are an experienced developer or just getting started, there's a place for you in our club.</p>
            <Button variant="primary" className="mt-4">Get Started</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;


