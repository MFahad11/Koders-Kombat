import {useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/WhatsApp Image 2022-12-12 at 23.13.37.jpg";
import Dialog from "../modal/Modal";
import Calendar from "../calendar/Calendar";
import './Navbar.css'
function NavBar() {
  const [show, setShow] = useState(false);
  return (
    <Navbar collapseOnSelect expand="md" style={{ backgroundColor: "rgba(0, 0, 0, 0.5);", backdropFilter: "blur(85px)" }} sticky="top">
      <Container>
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
          style={{ textDecoration: "none" }}
        >
          <Navbar.Brand href="#" className="start" style={{color : "white", fontSize:'1.5rem'}}>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            WebKode
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#pricing">Members</Nav.Link>
            <NavLink to='/blog' style={{fontSize: "1rem", marginRight: "15px", color: 'white', textDecoration : 'none' , marginTop : '7px'}}>BLOG</NavLink>
            <Link to="sponsor" spy={true} smooth={true} offset={-70} duration={400} className="link">
              <Nav.Link className="link">Sponsor</Nav.Link>
            </Link>
            <NavDropdown title="Events" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={()=>{setShow(true)}}>Calendar</NavDropdown.Item>
              <Dialog show={show} setShow={setShow} elem={<Calendar/>} title={"Future/Ongoing Events"}/>
              <NavDropdown.Item>
                <Link to="event" spy={true} smooth={true} duration={400} offset={700} style={{color:"black",textDecoration:"none"}}>
                  Ongoing Events
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="event" spy={true} smooth={true} offset={-70} duration={600} style={{color:"black",textDecoration:"none"}}>
                  Past Events
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="event" spy={true} smooth={true} duration={400} offset={1300} style={{color:"black",textDecoration:"none"}}>
                  Future Events
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to='/leaderboard' style={{fontSize: "1rem", marginRight: "15px", color: 'white', textDecoration : 'none' , marginTop : '7px'}}>LEADERBOARD</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
