import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import './Activities.css';

function ClubActivities() {
    const now = new Date();
  const events = [
    {
      title: 'Hackathon 2021',
      description: 'Our annual hackathon where participants compete to create the best project in a limited time period.',
      date: 'January 30, 2021',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Workshop on React',
      description: 'A workshop focused on learning the basics of React, a popular JavaScript library for building user interfaces.',
      date: 'March 15, 2021',
      image: 'https://via.placeholder.com/300x200',
    },
    {
        title: 'Hackathon 2021',
        description: 'Our annual hackathon where participants compete to create the best project in a limited time period.',
        date: 'January 30, 2021',
        image: 'https://via.placeholder.com/300x200',
      },
    {
      title: 'Web Development Bootcamp',
      description: 'An 8-week bootcamp covering the basics of web development, including HTML, CSS, and JavaScript.',
      startDate: 'April 1, 2023',
      endDate: 'May 27, 2023',
      image: 'https://via.placeholder.com/300x200',
    },
    {
        title: 'Web Development Bootcamp',
        description: 'An 8-week bootcamp covering the basics of web development, including HTML, CSS, and JavaScript.',
        startDate: 'April 1, 2023',
        endDate: 'May 27, 2023',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        title: 'Web Development Bootcamp',
        description: 'An 8-week bootcamp covering the basics of web development, including HTML, CSS, and JavaScript.',
        startDate: 'April 1, 2023',
        endDate: 'May 27, 2023',
        image: 'https://via.placeholder.com/300x200',
      },
    {
      title: 'Guest Speaker Series',
      description: 'A series of talks from industry professionals on topics such as software engineering, data science, and UX design.',
      date: 'June 15-30, 2023',
      image: 'https://via.placeholder.com/300x200',
    },
    {
        title: 'Guest Speaker Series',
        description: 'A series of talks from industry professionals on topics such as software engineering, data science, and UX design.',
        date: 'June 15-30, 2023',
        image: 'https://via.placeholder.com/300x200',
      },
      {
        title: 'Guest Speaker Series',
        description: 'A series of talks from industry professionals on topics such as software engineering, data science, and UX design.',
        date: 'June 15-30, 2023',
        image: 'https://via.placeholder.com/300x200',
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
  const renderCarouselItems = (events) => {
    const items = [];
    for (let i = 0; i < events.length; i += 3) {
      const eventGroup = events.slice(i, i + 3);
      items.push(
        <Carousel.Item key={i}>
          <Row>{renderEventCards(eventGroup)}</Row>
        </Carousel.Item>
      );
    }
    return items;
  };
  const renderEventCards = (events) => {
    return events.map((event, index) => {
      return (
        <Col key={index} md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={event.image} />
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Text>{event.description}</Card.Text>
              <Button variant="primary">{event.startDate ? 'Register Now' : 'Learn More'}</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{event.startDate ? `Starts on ${event.startDate}` : `Date: ${event.date}`}</small>
            </Card.Footer>
          </Card>
        </Col>
      );
    });
  };

  return (
    <div className="club-activities-container" id='event'>
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center">
            <h2 className="club-activities-header">Club Activities</h2>
            <p className="club-activities-text">Check out our past, ongoing, and upcoming events below.</p>
          </Col>
        </Row>

        {pastEvents.length > 0 && (
          <>
          <h3>Past Events</h3>
      <Carousel interval={null} touch={true} fade={false}>
        {renderCarouselItems(pastEvents)}
      </Carousel>
          </>
        )}

        {ongoingEvents.length > 0 && (
          <>
          <h3>Ongoing Events</h3>
      <Carousel interval={null} touch={true} fade={false}>
        {renderCarouselItems(ongoingEvents)}
      </Carousel>
          </>
        )}

        {upcomingEvents.length > 0 && (
          <>
          <h3>Upcoming Events</h3>
      <Carousel interval={null} touch={true} fade={false}>
        {renderCarouselItems(upcomingEvents)}
      </Carousel>
         </>)
        }
    </Container>
</div>
)}
export default ClubActivities