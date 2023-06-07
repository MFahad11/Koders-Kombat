import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NavBar from '../navbar/Navbar';
import { useLocation } from 'react-router-dom';
import "./Communities.css"

const Communities = () => {
    const location = useLocation();
    console.log(location.pathname.split('/')[2].split("%20"))
    let pathname = location.pathname.split('/')[2].replace("%20",' ')
    // pathname=pathname.split("/")
    const [showRecruitment, setShowRecruitment] = useState(false);

    useEffect(() => {
      setShowRecruitment(true);
    }, []);
  
    return (
        <Container className="d-flex flex-column justify-content-center align-items-end" style={{ minHeight: '100vh'}}>
        <h1 class="text-cemter align-items-end" style={{color : "white"}} >Welcome to {pathname} Community</h1>
        {showRecruitment && (
          <div className="recruitment-container text-center">
            <h2 className="recruitment-text" style={{color : "white"}}>Communities to go live soon!<br></br>Stay Tuned</h2>
            <Button variant="primary" className="shake-on-hover">Join Now</Button>
          </div>
        )}
      </Container>
    );;
};

export default Communities;