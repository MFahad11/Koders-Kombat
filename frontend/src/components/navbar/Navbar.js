import { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link as path } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../../assets/WhatsApp Image 2022-12-12 at 23.13.37.jpg'
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#pricing">Members</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">Leaderboard</Nav.Link>
            <Link
    activeClass="active" 
    to="sponsor"
    spy={true}
    smooth={true}
    offset={-70}
    duration={400}
><Nav.Link>Sponsor</Nav.Link></Link>

            <NavDropdown title="Events" id="collasible-nav-dropdown">
              <NavDropdown.Item>Calendar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ongoing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gallery</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Facebook</Nav.Link>
            <Nav.Link href="#deets">Twitter</Nav.Link>
            <Nav.Link href="#memes">Linkedin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;