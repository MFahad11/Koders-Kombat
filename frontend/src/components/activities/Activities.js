import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Activities.css";
import pic from "../../assets/OIP.jpeg";
import pic1 from "../../assets/react.png";
import pic2 from "../../assets/ai.png";
import pic3 from "../../assets/girl-student-learning-to-code.jpg";
import pic4 from "../../assets/cyber.jpg";
import pic5 from "../../assets/sqa.jpg";
import pic6 from "../../assets/web.png";
import pic7 from "../../assets/app.png";
import logo1 from "../../assets/WhatsApp Image 2023-06-07 at 10.31.25 PM (1).jpeg"
import logo2 from "../../assets/WhatsApp Image 2023-06-07 at 10.31.25 PM.jpeg"
import { useNavigate } from "react-router-dom";
import EventScheduleTable from "../tables/Table";
function ClubActivities() {
  const navigate = useNavigate();
  const now = new Date();
  const events = [
    {
      title: "Hackathon 2021",
      description:
        "Our annual hackathon where participants compete to create the best project in a limited time period.",
      date: "January 30, 2021",
      image: pic,
      type: "hackathons",
    },
    {
      title: "Workshop on React",
      description:
        "A workshop focused on learning the basics of React, a popular JavaScript library for building user interfaces.",
      date: "March 15, 2021",
      image: pic1,
      type: "workshop",
    },
    {
      title: "AI-HUB, a masterclass",
      description:
        "Our annual hackathon where participants compete to create the best project in a limited time period.",
      date: "January 30, 2021",
      image: pic2,
      type: "workshop",
    },
    {
      title: "Hackathon 2020",
      description:
        "Our annual hackathon where participants compete to create the best project in a limited time period.",
      date: "January 30, 2021",
      image: pic3,
      type: "hackathons",
    },
    {
      title: "Workshop CyberSecurity",
      description:
        "A workshop focused on learning the basics of React, a popular JavaScript library for building user interfaces.",
      date: "March 15, 2021",
      image: pic4,
      type: "workshop",
    },
    {
      title: "SQA session",
      description:
        "Our annual hackathon where participants compete to create the best project in a limited time period.",
      date: "January 30, 202w1",
      image: pic5,
      type: "workshop",
    },

    {
      title: "WEB KODE",
      description:
        "A coding event where participants compete to design and implement the most elegant and efficient software solutions.",
      start: "June 1, 2023",
      endDate: "June 10, 2023",
      image: pic,
      type: "workshop",
    },
    {
      title: "KODERS KOMBAT",
      description:
        "A collaborative coding event where programmers pair up to exchange and improve each other's code, fostering learning and innovation.",
      start: "June 3, 2023",
      endDate: "June 13, 2023",
      image: pic,
      type: "workshop",
    },
    {
      title: "Guest Speaker Series",
      description:
        "A series of challenging and engaging activities revolving around data analysis, cleaning, visualizations, and interpretation.",
      date: "June 21, 2023",
      // endDate: 'June 30, 2023',
      image: pic,
      type: "workshop",
    },
    {
      title: "Data Quest: Patterns Unveil",
      description:
        "A series of challenging and engaging activities revolving around data analysis, cleaning, visualizations, and interpretation.",
      date: "July 1, 2023",
      // endDate: 'July 10, 2023',
      image: pic,
      type: "workshop",
    },
    {
      title: "Code Review",
      description:
        "A collaborative process where programmers analyze and assess each other's code to improve its quality, readability, and efficiency.",
      date: "July 11, 2023",
      // endDate: 'July 20, 2023',
      image: pic,
      type: "workshop",
    },
    {
      title: "Bug Fixing Marathon",
      description:
        "A focused event where developers dedicate time to identifying and fixing software bugs to enhance the stability and functionality of an application.",
      date: "July 21, 2023",
      // endDate: 'July 30, 2023',
      image: pic,
      type: "workshop",
    },
    {
      title: "Open Source Contribution Day",
      description:
        "A community-driven event encouraging developers to contribute to open source projects by submitting code enhancements, bug fixes, or new features.",
      date: "August 1, 2023",
      // endDate: 'August 10, 2023',
      image: pic,
      type: "workshop",
    },
    {
      title: "Algorithmic Programming Contest",
      description:
        "A timed competition where participants solve complex algorithmic problems using efficient coding techniques to achieve the highest score.",
      date: "August 11, 2023",
      // endDate: 'August 20, 2023',
      image: pic,
      type: "workshop",
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
    const eventstart = new Date(event.start);
    const eventEndDate = new Date(event.endDate);
    return eventstart <= now && eventEndDate >= now;
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
          <Card className="m-2 event-card">
            <Card.Img variant="top" src={event.image} />
            <Card.Body className="event-card-body">
              <Card.Title className="text-light">{event.title}</Card.Title>
              <Card.Text className="text-light">{event.description}</Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  navigate(`/event/detail`, {
                    state: {
                      ...event,
                    },
                  });
                }}
              >
                {event.start ? "Register Now" : "Learn More"}
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-lights">
                {event.start
                  ? `Starts on ${event.start}`
                  : `Date: ${event.date}`}
              </small>
            </Card.Footer>
          </Card>
        </Col>
      );
    });
  };

  return (
    <><div className="club-activities-container" id="event">
    <Container>
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h2 className="club-activities-header">Events</h2>
          <p className="club-activities-text">
            Check out our ongoing events below.
          </p>
        </Col>
      </Row>
      {ongoingEvents.length > 0 && (
        <Row className="justify-content-center">
          <Col xs={12} lg={5} className="event-table-container">
            {/* <span>Date</span><h3 className="event-heading text-center text-light"><img className="me-2 rounded-circle img-fluid" src={logo1} style={{ width: '50px', height: '50px' }} />{ongoingEvents[0].title}</h3><a>ffff</a>
             */}
             <Row className="align-items-center">
  <Col xs={3}>
  <span className="text-light">Date: 9-June, 23</span>
  </Col>
  <Col xs={6} className="d-flex justify-content-center">
    <h3 className="event-heading text-center text-light">
      {/* <img className="me-2 rounded-circle img-fluid" src={logo1} style={{ width: '50px', height: '50px' }} /> */}
      {ongoingEvents[0].title}
    </h3>
  </Col>
  <Col xs={3}>
  <Button className="btn btn-primary shake-on-hover" style={{ backgroundColor: "rgb(201, 117, 81)", borderColor: "rgb(201, 117, 81)" }} disabled>Register</Button>

  </Col>
</Row>
            <hr className="hr" />
            
              <EventScheduleTable index={0}/>
            
          </Col>
          <Col xs={12} lg={5} className="event-table-container ">
          {/* <h3 className="event-heading text-center text-light"><img className="me-2 rounded-circle img-fluid" src={logo1} style={{ width: '50px', height: '50px' }} />{ongoingEvents[1].title}</h3> */}
            {/* <h3 className="event-heading text-center text-light">{ongoingEvents[1].title}</h3> */}
            <Row className="align-items-center">
  <Col xs={3}>
    <span className="text-light">Date: 9-June, 23</span>
  </Col>
  <Col xs={6} className="d-flex justify-content-center">
    <h3 className="event-heading text-center text-light">
      {/* <img className="me-2 rounded-circle img-fluid" src={logo2} style={{ width: '50px', height: '50px' }} /> */}
      {ongoingEvents[1].title}
    </h3>
  </Col>
  <Col xs={3}>
  <Button className="btn btn-primary shake-on-hover" style={{ backgroundColor: "rgb(201, 117, 81)", borderColor: "rgb(201, 117, 81)" }} disabled>Register</Button>
  </Col>
</Row>
            <hr className="hr" />
            
            <EventScheduleTable index={1}/>
            
          </Col>
        </Row>
      )}
    </Container>
  </div>
  
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
            <h3 className="text-light">Past Events</h3>
            <Slider {...settings}>{renderEventCards(pastEvents)}</Slider>
            <hr className="hr" />
          </>
        )}

        {upcomingEvents.length > 0 && (
          <>
            <h3 className="text-light">Upcoming Events</h3>
            <Slider {...settings}>{renderEventCards(upcomingEvents)}</Slider>
          </>
        )}
      </Container>
    </div></>
  );
}

export default ClubActivities;
