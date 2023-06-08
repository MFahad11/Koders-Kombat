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
import logo1 from "../../assets/WhatsApp Image 2023-06-07 at 10.31.25 PM (1).jpeg"
import logo2 from "../../assets/WhatsApp Image 2023-06-07 at 10.31.25 PM.jpeg"
import iconics_22_main from "../../assets/iconics_22_main.jpg"
import hackathon_22_main from "../../assets/hackathon_22_main.jpg"
import itec_22_main from "../../assets/itec_22_main.jpg"
import koderzkombat_22_main from "../../assets/koderzkombat_22_main.jpg"
import itec_23_main_future from "../../assets/itec_23_main_future.jpg"
import webkode_23_future from "../../assets/webkode_23_future.jpg"
import koderzkombat_23_future from "../../assets/koderzkombat_23_future.jpg"
import { useNavigate } from "react-router-dom";
import EventScheduleTable from "../tables/Table";
function ClubActivities() {
  const navigate = useNavigate();
  const now = new Date();
  const events = [
    {
      title: "Koderz Kombat 2022 ",
      description:
        "The most awaited Koderz Kombat which puts to test participants' problem-solving skills. The winners qualified for round 2 where they had to build a chatmbot and optimize a problem.",
      longDescription:
      "The Department of Computer Science & Information technology has always aimed to polish the technical skills and to nurture expertise for its undergraduate students by conducting credible coding competitions for all the CS & IT Programmes. These competitions help our students in keeping up their momentum with other techies around and keep them aware of emerging technologies. Participants would be exposed to strengthening their programming skills and career-changing opportunities by getting themselves involved in coding contests. Koders Kombat is being organized with the help of Koders Club, an official Computer Science & Information Technology community, with a sensational mission of enticing all the tech-enthusiasts to boost their competence and problem solving skills. Considering the significance of technical backing, it is mandatory for every student to appear in these coding competitions.",
      date: "December 15, 2022",
      image: koderzkombat_22_main,
      type: "hackathons",
    },
    {
      title: "ICONICS 2022",
      description: "ICONICS provides an international forum for the presentation and dissemination of technological advances, research and innovation in the fast paced field of Computer Science and Software Engineering.",
      longDescription:
        "NED University of Engineering and Technology, one of the oldest institute for imparting engineering education in Pakistan announces 3rd International Conference on Innovations in Computer Science & Software Engineering (ICONICS'22). The conference will provide a platform for researchers both national and international to exchange novel and contemporary ideas in the emerging fields of computing. The conference aims to provide a forum for researchers from academia and industry to meet and share cutting-edge development in the field of Computer Science & Software Engineering. The conference seeks to bring together a wide spectrum of international experts to help create a conducive environment for collaboration and knowledge transfer. The conference will particularly act as a bridge between academia and major industry movers to help promote an active research environment in the country. The conference solicits significant contributions in all major fields of Computer Science and Software Engineering from conceptual and practical aspects. Authors are invited to contribute to the conference by submitting articles that illustrate research results, surveying works and industrial experiences that describe significant advances in the field of computer science and software engineering.The 3rd edition of International Conference on Innovations in Computer Science and Software Engineering (ICONICS 2022) was held on 14-15 December 2022. The conference was chaired by Dr. Muhammad Mubashir Khan. TrendMicro was the Platinum sponsor and Telec the Bronze sponsor. OctDaily and MazikGlobal were the other sponsors . The conference was also supported by HEC Sindh and Pakistan, and IEEE Karachi Section. During this two days’ conference, excellent thought-provoking talks about the latest research trends in Artificial Intelligence, Machine & Deep learning, Data Science, Cyber and Information Security, Cloud Computing, Quantum Computing and Internet of Things were delivered. Researchers presented 29 different papers to enlighten more than 500 of our young participants from different universities all over Karachi and professionals from all over the country and even abroad. Along with the technical sessions Koderz Kombat, a coding competition, a hackathon and a poster exhibition were also the part of the conference activities that provided an opportunity for the students to stand out and demonstrate their skills.",
      date: "December 14, 2022",
      image: iconics_22_main,
      type: "hackathons",
    },
    {
      title: "Hackathon 2022",
      description:
        "APIMatic invites students to build innovative solutions using APIs. We want to promote innovation out-of-the-box thinking in young minds, especially IT students.",
      longDescription:
      "APIMatic, founded by an ex-BCITian Syed Adeel Ali, is a Developer Experience Platform that is subscribed by over 50,000 businesses across 201 countries in the world to consume APIs. Nurtured in Silicon Valley, our team is equipped with innovative intellect,collaborative behaviours, and customer centrism. Our mission is to make developers moreproductive through automatic code generation. The heart of APIMatic is a customizable Code-Gen-Engine, which simplifies API consumption by automatically generating high-quality SDKs, code samples, dynamic docs, and test cases. With teams in New Zealand, United States & Pakistan, we are continuously expanding our global reach. In this hackathon, you are challenged to not only develop a solution based on a specific problem statement but innovate an idea from scratch. Using an API, design and develop an innovative solution that solves a problem for you or the people around you using APIs in the best way possible.",
      date: "March 22, 2022",
      image: hackathon_22_main,
      type: "hackathon",
      prize: ["Rs 30,000", "Rs 20,000"],
    },
    {
      title: "ITEC 2022",
      description:
        "With technifying competitions, tech bundled projects and a future defining job fair as its centerpiece, ITEC'22 endures as the premier tech event of Karachi the year.",
      longDescription:
      "ITEC'22 was jointly organized by the Departments of Software Engineering and Computer Science & Information Technology of NED University of Engi- neering and Technology on July 19-20, 2022.  Prof. Dr. Sarosh H. Lodi (Vice Chancellor, NED University) was the Chief Guest and Mr. Ashraf Kapadia (Managing Director of Systems Limited) was the Guest of Honor. The event was sponsored by companies namely Shispare, SIBISOFT, 10Pearls, Gaditek, Folio3, Geeks of Kolachi, Disrupt Labs,Techwards and others. Students from various universities participated in the event. Competitions included Speed programming, Data Science, Code in the Dark, FIFA, Chess, Hackathon, and UI/UX competition. ",
      date: "July 19, 2022",
      image: itec_22_main,
      type: "hackathon",
      prize: ["Up to 200,000"],
    },
    // above are past events.
    {
      title: "Web Kode",
      description:
        "A coding event where participants compete to design and implement the most elegant and efficient software solutions.",
      start: "June 1, 2023",
      endDate: "June 10, 2023",
      image: pic,
      type: "workshop",
    },
    {
      title: "Koderz Kombat",
      description:
        "A collaborative coding event where programmers pair up to exchange and improve each other's code, fostering learning and innovation.",
      start: "June 3, 2023",
      endDate: "June 13, 2023",
      image: pic,
      type: "workshop",
    },
    {
      title: "Koderz Kombat Fall 2023",
      description:
        "A new series of challenges coupled with even greater winning prizes. The most anticipated event of the year returns this fall Stay tuned for more information.",
      date: "July 15, 2023",
      image: koderzkombat_23_future,
      type: "hackathon",
    },
    {
      title: "Web Kode Fall 2023",
      description:
        "Missed out on Web Kode Spring 23? Worry not because the best web development competition is returning this fall as well. Stay tuned.",
      date: "July 15, 2023",
      image: webkode_23_future,
      type: "workshop",
    },
    {
      title: "ITEC 2023",
      description:
        "The biggest series of competitions is returning this fall. From gaming to coding, from photography to football, there are competitions for everyone.",
      date: "December 11, 2023",
      image: itec_23_main_future,
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
  <span className="text-light">Date: 9 June, 23</span>
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
    <span className="text-light">Date: 9 June, 23</span>
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
