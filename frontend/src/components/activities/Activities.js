import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Activities.css';
import pic from '../../assets/OIP.jpeg'
import pic1 from '../../assets/react.png'
import pic2 from '../../assets/ai.png'
import pic3 from '../../assets/girl-student-learning-to-code.jpg'
import pic4 from '../../assets/cyber.jpg'
import pic5 from '../../assets/sqa.jpg'
import pic6 from '../../assets/web.png'
import pic7 from '../../assets/app.png'
import { useNavigate } from 'react-router-dom';
function ClubActivities() {
  const navigate=useNavigate()
  const now = new Date();
  const events = [
    {
      title: 'Hackathon 2021',
      description: 'Our annual hackathon where participants compete to create the best project in a limited time period.',
      date: 'January 30, 2021',
      image: pic,
      type:'hackathons'
    },
    {
      title: 'Workshop on React',
      description: 'A workshop focused on learning the basics of React, a popular JavaScript library for building user interfaces.',
      date: 'March 15, 2021',
      image: pic1,
      type:"workshop"
    },
    {
        title: 'AI-HUB, a masterclass',
        description: 'Our annual hackathon where participants compete to create the best project in a limited time period.',
        date: 'January 30, 2021',
        image: pic2,
        type:'workshop'
      },
      {
        title: 'Hackathon 2020',
        description: 'Our annual hackathon where participants compete to create the best project in a limited time period.',
        date: 'January 30, 2021',
        image: pic3,
        type:'hackathons'
      },
      {
        title: 'Workshop CyberSecurity',
        description: 'A workshop focused on learning the basics of React, a popular JavaScript library for building user interfaces.',
        date: 'March 15, 2021',
        image: pic4,
        type:'workshop'
      },
      {
          title: 'SQA session',
          description: 'Our annual hackathon where participants compete to create the best project in a limited time period.',
          date: 'January 30, 2021',
          image: pic5,
          type:'workshop'
        },
    {
      title: 'Web Development Bootcamp',
      description: 'An 8-week bootcamp covering the basics of web development, including HTML, CSS, and JavaScript.',
      startDate: 'April 1, 2023',
      endDate: 'May 27, 2023',
      image: pic6,
      type:'workshop'
    },
    {
        title: 'App Development Bootcamp',
        description: 'An 8-week bootcamp covering the basics of web development, including HTML, CSS, and JavaScript.',
        startDate: 'April 1, 2023',
        endDate: 'May 27, 2023',
        image: pic7,
        type:'workshop'
      },
      {
        title: 'Hackathon 2023',
        description: 'Our annual hackathon where participants compete to create the best project in a limited time period.',
        startDate: 'April 1, 2023',
        endDate: 'May 27, 2023',
        image: pic,
        type:'hackathons'
      },
    {
      title: 'Guest Speaker Series',
      description: 'A series of talks from industry professionals on topics such as software engineering, data science, and UX design.',
      date: 'June 15-30, 2023',
      image: pic,
      type:'workshop'
    },
    {
        title: 'Guest Speaker Series',
        description: 'A series of talks from industry professionals on topics such as software engineering, data science, and UX design.',
        date: 'June 15-30, 2023',
        image: pic,
        type:'workshop'
      },
      {
        title: 'Guest Speaker Series',
        description: 'A series of talks from industry professionals on topics such as software engineering, data science, and UX design.',
        date: 'June 15-30, 2023',
        image: pic,
        type:'workshop'
      },
  ];
  const pastEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate < now;
  });

  const upcomingEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate > now;
  });

  const ongoingEvents = events.filter((event) => {
    const eventStartDate = new Date(event.startDate);
    const eventEndDate = new Date(event.endDate);
    return eventStartDate <= now && eventEndDate >= now;
  });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderEventCards = (events) => {
    return events.map((event, index) => {
      return (
<Col key={index} md={4} className="mb-4">
        <Card className="m-2">
          <Card.Img variant="top" src={event.image} />
          <Card.Body className="event-card-body">
            <Card.Title>{event.title}</Card.Title>
            <Card.Text>{event.description}</Card.Text>
            <Button variant="primary" onClick={()=>{
              
              navigate(`/event/detail`,
{
state: {
  ...event
}
})}}>
              {event.startDate ? "Register Now" : "Learn More"}
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {event.startDate
                ? `Starts on ${event.startDate}`
                : `Date: ${event.date}`}
            </small>
          </Card.Footer>
        </Card>
      </Col>
      );
    });
  };

  return (
    <div className="club-activities-container" id="event">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center">
            <h2 className="club-activities-header">Club Activities</h2>
            <p className="club-activities-text">
              Check out our past, ongoing, and upcoming events below.
            </p>
          </Col>
        </Row>
        {pastEvents.length > 0 && (
  <>
    <h3 className='text-light'>Past Events</h3>
    <Slider {...settings}>{renderEventCards(pastEvents)}</Slider>
    <hr className="hr" />
  </>
)}

{ongoingEvents.length > 0 && (
  <>
    <h3 className='text-light'>Ongoing Events</h3>
    <Slider {...settings}>{renderEventCards(ongoingEvents)}</Slider>
    <hr className="hr" />
  </>
)}

{upcomingEvents.length > 0 && (
  <>
    <h3 className='text-light'>Upcoming Events</h3>
    <Slider {...settings}>{renderEventCards(upcomingEvents)}</Slider>
  </>
)}

      </Container>
    </div>
  );
}

export default ClubActivities;
