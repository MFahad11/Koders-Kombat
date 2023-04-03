import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col md={6}>
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium nibh dolor, quis commodo est elementum nec. Maecenas vel feugiat libero. Suspendisse commodo, risus sit amet rutrum vestibulum, velit velit commodo erat, sit amet vestibulum lorem dolor in mi. Morbi commodo porttitor sem, id euismod risus malesuada vel. Ut vitae nibh congue, commodo turpis id, porttitor lacus.
            </p>
          </Col>
          <Col md={3}>
            <h3>Links</h3>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/members">Members</a></li>
              <li><a href="/sponsors">Sponsors</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h3>Contact Us</h3>
            <ul className="list-unstyled">
              <li>123 Main Street</li>
              <li>Anytown, USA 12345</li>
              <li>Email: info@club.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="text-center">
          &copy; {new Date().getFullYear()} Coding Club. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
