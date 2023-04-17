import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Gallery from '../gallery/Gallery';
import './EventDetails.css'
const EventDetailPage = () => {
  const {state}=useLocation();

  return (
<>
    <div className="event-detail-page">
    
      <Container>
        <Row>
          <Col md={6}>
            <div className="event-image-gallery">
              <Gallery />
            </div>
          </Col>
          <Col md={6}>
            <div className="event-details">
              <h1>{state.title}</h1>
              <p>{state.date}</p>
              <p>{state.description}</p>
              <Button>
              <NavLink to='/' style={{textDecoration:"none",color:"white"}}>Back</NavLink>
              </Button>
              {
                !state.startDate?
                state.type==="hackathons"?
                (<Button className='ms-2'>
<NavLink to={`/leaderboard`} style={{textDecoration:"none",color:"white"}}>
                  Leaderboard
                </NavLink>
              </Button>
              ):"":(<Button className='ms-2'>
<NavLink to={`/registeration/${state.type}`} style={{textDecoration:"none",color:"white"}}>
                  Register
                </NavLink>
              </Button>)}
            </div>
          </Col>
        </Row>
      </Container>
    </div></>
  );
};

export default EventDetailPage;
