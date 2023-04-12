// import React from 'react';
// import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
// import './Activities.css';

// function ClubActivities() {
//     const now = new Date();
  // const events = [
  //   {
  //     title: 'Hackathon 2021',
  //     description: 'Our annual hackathon where participants compete to create the best project in a limited time period.',
  //     date: 'January 30, 2021',
  //     image: pic,
  //   },
  //   {
  //     title: 'Workshop on React',
  //     description: 'A workshop focused on learning the basics of React, a popular JavaScript library for building user interfaces.',
  //     date: 'March 15, 2021',
  //     image: pic,
  //   },
  //   {
  //       title: 'Hackathon 2021',
  //       description: 'Our annual hackathon where participants compete to create the best project in a limited time period.',
  //       date: 'January 30, 2021',
  //       image: pic,
  //     },
  //   {
  //     title: 'Web Development Bootcamp',
  //     description: 'An 8-week bootcamp covering the basics of web development, including HTML, CSS, and JavaScript.',
  //     startDate: 'April 1, 2023',
  //     endDate: 'May 27, 2023',
  //     image: pic,
  //   },
  //   {
  //       title: 'Web Development Bootcamp',
  //       description: 'An 8-week bootcamp covering the basics of web development, including HTML, CSS, and JavaScript.',
  //       startDate: 'April 1, 2023',
  //       endDate: 'May 27, 2023',
  //       image: pic,
  //     },
  //     {
  //       title: 'Web Development Bootcamp',
  //       description: 'An 8-week bootcamp covering the basics of web development, including HTML, CSS, and JavaScript.',
  //       startDate: 'April 1, 2023',
  //       endDate: 'May 27, 2023',
  //       image: pic,
  //     },
  //   {
  //     title: 'Guest Speaker Series',
  //     description: 'A series of talks from industry professionals on topics such as software engineering, data science, and UX design.',
  //     date: 'June 15-30, 2023',
  //     image: pic,
  //   },
  //   {
  //       title: 'Guest Speaker Series',
  //       description: 'A series of talks from industry professionals on topics such as software engineering, data science, and UX design.',
  //       date: 'June 15-30, 2023',
  //       image: pic,
  //     },
  //     {
  //       title: 'Guest Speaker Series',
  //       description: 'A series of talks from industry professionals on topics such as software engineering, data science, and UX design.',
  //       date: 'June 15-30, 2023',
  //       image: pic,
  //     },
  // ];
//   const pastEvents = events.filter((event) => {
//     const eventDate = new Date(event.date);
//     return eventDate < now;
//   });

//   const upcomingEvents = events.filter((event) => {
//     const eventDate = new Date(event.date);
//     return eventDate > now;
//   });

//   const ongoingEvents = events.filter((event) => {
//     const eventStartDate = new Date(event.startDate);
//     const eventEndDate = new Date(event.endDate);
//     return eventStartDate <= now && eventEndDate >= now;
//   });
//   const renderCarouselItems = (events) => {
//     const items = [];
//     for (let i = 0; i < events.length; i += 3) {
//       const eventGroup = events.slice(i, i + 3);
//       items.push(
//         <Carousel.Item key={i}>
//           <Row>{renderEventCards(eventGroup)}</Row>
//         </Carousel.Item>
//       );
//     }
//     return items;
//   };
//   const renderEventCards = (events) => {
//     return events.map((event, index) => {
//       return (
//         <Col key={index} md={4} className="mb-4">
//           <Card>
//             <Card.Img variant="top" src={event.image} />
//             <Card.Body>
//               <Card.Title>{event.title}</Card.Title>
//               <Card.Text>{event.description}</Card.Text>
//               <Button variant="primary">{event.startDate ? 'Register Now' : 'Learn More'}</Button>
//             </Card.Body>
//             <Card.Footer>
//               <small className="text-muted">{event.startDate ? `Starts on ${event.startDate}` : `Date: ${event.date}`}</small>
//             </Card.Footer>
//           </Card>
//         </Col>
//       );
//     });
//   };

//   return (
//     <div className="club-activities-container" id='event'>
//       <Container>
//         <Row className="justify-content-center mb-4">
//           <Col md={8} className="text-center">
//             <h2 className="club-activities-header">Club Activities</h2>
//             <p className="club-activities-text">Check out our past, ongoing, and upcoming events below.</p>
//           </Col>
//         </Row>

//         {pastEvents.length > 0 && (
//           <>
//           <h3>Past Events</h3>
//       <Carousel interval={null} touch={true} fade={false}>
//         {renderCarouselItems(pastEvents)}
//       </Carousel>
//           </>
//         )}

//         {ongoingEvents.length > 0 && (
//           <>
//           <h3>Ongoing Events</h3>
//       <Carousel interval={null} touch={true} fade={false}>
//         {renderCarouselItems(ongoingEvents)}
//       </Carousel>
//           </>
//         )}

//         {upcomingEvents.length > 0 && (
//           <>
//           <h3>Upcoming Events</h3>
//       <Carousel interval={null} touch={true} fade={false}>
//         {renderCarouselItems(upcomingEvents)}
//       </Carousel>
//          </>)
//         }
//     </Container>
// </div>
// )}
// export default ClubActivities
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// function CustomPrevButton(props) {
//   const { className, onClick } = props;
//   return (
//     <button className={`${className} custom-prev-button`} onClick={onClick}>
//       &lt; Previous
//     </button>
//   );
// }

// function CustomNextButton(props) {
//   const { className, onClick } = props;
//   return (
//     <button className={`${className} custom-next-button`} onClick={onClick}>
//       Next &gt;
//     </button>
//   );
// }

// function ClubActivities() {
//   const settings = {
//     dots: false,
//     focusOnSelect: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: <CustomPrevButton />,
//     nextArrow: <CustomNextButton />,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const cardData = [
//     { title: 'Card 1', image: 'card1.jpg', description: 'This is card 1' },
//     { title: 'Card 2', image: 'card2.jpg', description: 'This is card 2' },
//     { title: 'Card 3', image: 'card3.jpg', description: 'This is card 3' },
//     { title: 'Card 4', image: 'card4.jpg', description: 'This is card 4' },
//     { title: 'Card 5', image: 'card5.jpg', description: 'This is card 5' },
//   ];

//   return (
//     <Slider {...settings}>
//       {cardData.map((card, index) => (
//         <div key={index}>
//           <div className="card">
//             <img src={card.image} className="card-img-top" alt={card.title} />
//             <div className="card-body">
//               <h5 className="card-title">{card.title}</h5>
//               <p className="card-text">{card.description}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </Slider>
//   );
// }

// CustomPrevButton.defaultProps = {
//   className: '',
//   onClick: () => {},
// };

// CustomNextButton.defaultProps = {
//   className: '',
//   onClick: () => {},
// };

// export default ClubActivities;

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Activities.css';
import pic from './OIP.jpeg'
import pic1 from './react.png'
import pic2 from './ai.png'
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
    },
    {
      title: 'Workshop on React',
      description: 'A workshop focused on learning the basics of React, a popular JavaScript library for building user interfaces.',
      date: 'March 15, 2021',
      image: pic1,
    },
    {
        title: 'Hackathon 2021',
        description: 'Our annual hackathon where participants compete to create the best project in a limited time period.',
        date: 'January 30, 2021',
        image: pic2,
      },
      {
        title: 'Hackathon 2020',
        description: 'Our annual hackathon where participants compete to create the best project in a limited time period.',
        date: 'January 30, 2021',
        image: pic,
      },
      {
        title: 'Workshop onact',
        description: 'A workshop focused on learning the basics of React, a popular JavaScript library for building user interfaces.',
        date: 'March 15, 2021',
        image: pic,
      },
      {
          title: 'Hackat 2021',
          description: 'Our annual hackathon where participants compete to create the best project in a limited time period.',
          date: 'January 30, 2021',
          image: pic,
        },
    {
      title: 'Web Development Bootcamp',
      description: 'An 8-week bootcamp covering the basics of web development, including HTML, CSS, and JavaScript.',
      startDate: 'April 1, 2023',
      endDate: 'May 27, 2023',
      image: pic,
    },
    {
        title: 'Web Development Bootcamp',
        description: 'An 8-week bootcamp covering the basics of web development, including HTML, CSS, and JavaScript.',
        startDate: 'April 1, 2023',
        endDate: 'May 27, 2023',
        image: pic,
      },
      {
        title: 'Web Development Bootcamp',
        description: 'An 8-week bootcamp covering the basics of web development, including HTML, CSS, and JavaScript.',
        startDate: 'April 1, 2023',
        endDate: 'May 27, 2023',
        image: pic,
      },
    {
      title: 'Guest Speaker Series',
      description: 'A series of talks from industry professionals on topics such as software engineering, data science, and UX design.',
      date: 'June 15-30, 2023',
      image: pic,
    },
    {
        title: 'Guest Speaker Series',
        description: 'A series of talks from industry professionals on topics such as software engineering, data science, and UX design.',
        date: 'June 15-30, 2023',
        image: pic,
      },
      {
        title: 'Guest Speaker Series',
        description: 'A series of talks from industry professionals on topics such as software engineering, data science, and UX design.',
        date: 'June 15-30, 2023',
        image: pic,
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
    <h3>Past Events</h3>
    <Slider {...settings}>{renderEventCards(pastEvents)}</Slider>
    <hr className="hr" />
  </>
)}

{ongoingEvents.length > 0 && (
  <>
    <h3>Ongoing Events</h3>
    <Slider {...settings}>{renderEventCards(ongoingEvents)}</Slider>
    <hr className="hr" />
  </>
)}

{upcomingEvents.length > 0 && (
  <>
    <h3>Upcoming Events</h3>
    <Slider {...settings}>{renderEventCards(upcomingEvents)}</Slider>
  </>
)}

      </Container>
    </div>
  );
}

export default ClubActivities;
