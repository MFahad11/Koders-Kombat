import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgba(0, 0, 0, 0.5);",color: "#fff" ,padding: "2rem 0" }}>
      <Container>
        <Row>
          <Col md={4}>
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor,
              libero in efficitur commodo, ligula ex vulputate metus, vel blandit
              ipsum ex nec lacus.
            </p>
          </Col>
          <Col md={4}>
            <h4>Contact Us</h4>
            <p>
              1234 Main Street <br />
              Suite 123 <br />
              Anytown, USA 12345 <br />
              Phone: (123) 456-7890 <br />
              Email: info@website.com
            </p>
          </Col>
          <Col md={4}>
  <h4 style={{ color: "#fff" }}>Follow Us</h4>
  <ul className="list-unstyled d-flex">
    <li className="me-3">
      <a href="#" target="_blank" rel="noreferrer">
        <FaFacebook size={24} style={{ color: "#fff" }} />
      </a>
    </li>
    <li className="me-3">
      <a href="#" target="_blank" rel="noreferrer">
        <FaTwitter size={24} style={{ color: "#fff" }} />
      </a>
    </li>
    <li className="me-3">
      <a href="#" target="_blank" rel="noreferrer">
        <FaLinkedin size={24} style={{ color: "#fff" }} />
      </a>
    </li>
    <li>
      <a href="#" target="_blank" rel="noreferrer">
        <FaInstagram size={24} style={{ color: "#fff" }} />
      </a>
    </li>
  </ul>
</Col>
        </Row>
        <hr style={{ borderColor: "#fff" }} />
        <p className="text-center" style={{ marginTop: "1rem" }}>
          &copy; {new Date().getFullYear()} WebKode. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

