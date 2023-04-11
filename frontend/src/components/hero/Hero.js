import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Dialog from '../modal/Modal';
import './Hero.css';
import Membership from '../membership/Membership';

function Hero() {
  const [show, setShow] = useState(false);
  return (
<div className="hero-container d-flex flex-column justify-content-center align-items-right">
  <Container fluid>
    <Row>
      <Col lg={{ span: 8, offset: 2 }} xl={{ span: 6, offset: 3 }} className="text-center">
        <h1 className="hero-header">Join Our Student Coding Club</h1>
        <p className="hero-subtext">We are a community of students who love coding and building cool projects together. Whether you are an experienced developer or just getting started, there's a place for you in our club.</p>
        <Button className="mt-4 btn-hero" onClick={() => setShow(true)}>Join Our Club</Button>
      </Col>
    </Row>
  </Container>
  <Dialog show={show} setShow={setShow} elem={<Membership />} title={"Membership Form"} />
</div>


  );
}

export default Hero;


