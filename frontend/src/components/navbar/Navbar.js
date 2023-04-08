import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/WhatsApp Image 2022-12-12 at 23.13.37.jpg";
import Dialog from "../modal/Modal";
import Calendar from "../calendar/Calendar";
function NavBar() {
  const [show, setShow] = useState(false);
  return (
    
    <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark">
      <Container>
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
          style={{ textDecoration: "none" }}
        >
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            KoderKombat
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#pricing" >Members</Nav.Link>
            <Nav.Link><NavLink to='/blog' style={{textDecoration:"none"}}>Blog</NavLink></Nav.Link>
            <Link
              activeClass="active"
              to="sponsor"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}
            >
              <Nav.Link>Sponsor</Nav.Link>
            </Link>

            <NavDropdown title="Events" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={()=>{setShow(true)}}>Calendar</NavDropdown.Item>
              <Dialog show={show} setShow={setShow} elem={<Calendar/>} title={"Future/Ongoing Events"}/>
              
              <NavDropdown.Item>
                {" "}
                <Link
                  activeClass="active"
                  to="event"
                  spy={true}
                  smooth={true}
                  duration={400}
                  offset={600}
                >
                  Ongoing Events
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                {" "}
                <Link
                  activeClass="active"
                  to="event"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={400}
                >
                  Past Events
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <Link
                  activeClass="active"
                  to="event"
                  spy={true}
                  smooth={true}
                  duration={400}
                  offset={1100}
                >
                  Future Events
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.facebook.com/kodersclub">Facebook</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;
