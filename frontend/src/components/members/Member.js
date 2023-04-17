import React from 'react';
import { Card, ListGroup, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import './Member.css';

const ClubMemberProfiles = () => {
  const members = [
    {
      id: 1,
      name: 'John Doe',
      position: 'President',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
      email: 'johndoe@gmail.com',
      phone: '555-1234',
      github: 'https://github.com/johndoe',
      linkedin: 'https://www.linkedin.com/in/johndoe',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Vice President',
      bio: 'Sed cursus ante dapibus diam. Sed nisi nulla, sagittis ac porttitor vel.',
      email: 'janesmith@gmail.com',
      phone: '555-5678',
      github: 'https://github.com/janesmith',
      linkedin: 'https://www.linkedin.com/in/janesmith',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      position: 'Treasurer',
      bio: 'Proin aliquet lorem ac odio convallis sagittis. Nullam a dui nec turpis.',
      email: 'bobjohnson@gmail.com',
      phone: '555-9012',
      github: 'https://github.com/bobjohnson',
      linkedin: 'https://www.linkedin.com/in/bobjohnson',
    },
    {
        id: 4,
        name: 'Jessi Pinkman',
        position: 'Media Head',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
        email: 'jessi@gmail.com',
        phone: '555-1234',
        github: 'https://github.com/johndoe',
        linkedin: 'https://www.linkedin.com/in/johndoe',
      },
      {
        id: 5,
        name: 'Walter White',
        position: 'Tech Lead',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
        email: 'walter@gmail.com',
        phone: '555-1234',
        github: 'https://github.com/johndoe',
        linkedin: 'https://www.linkedin.com/in/johndoe',
      },
      {
        id: 6,
        name: 'Walter White',
        position: 'Management Head',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
        email: 'white@gmail.com',
        phone: '555-1234',
        github: 'https://github.com/johndoe',
        linkedin: 'https://www.linkedin.com/in/johndoe',
      },
  ];

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

  return (
    <div className="member-container" id='member'>
      <h1 className="text-center text-light mb-4">Our Members</h1>
      <Slider {...settings} className="justify-content-center">
        {members.map((member) => (
          <Col key={member.id} className="col-12 col-sm-6 col-md-4">
          <Card className="member-card mb-4 m-2">
    <Card.Header className="member-header" style={{
      borderBottom:"1px solid white"
    }}>{member.name}</Card.Header>
    <Card.Body style={{
      borderBottom:"1px solid white"
    }}>
      <Card.Title>{member.position}</Card.Title>
      <Card.Text className='text-truncate '>{member.bio}</Card.Text>
    </Card.Body>
    <ListGroup variant="flush">
      <ListGroup.Item className='member-card-footer'>
        <FaEnvelope /> {member.email}
      </ListGroup.Item>
      <ListGroup.Item className='member-card-footer'>
        <FaPhone /> {member.phone}
      </ListGroup.Item>
      <ListGroup.Item className='member-card-footer'>
        <a href={member.github} target="_blank" rel="noopener noreferrer" className='me-2 fs-4 text-light'>
          <AiFillGithub />
        </a>
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className='fs-4 text-light'>
          <AiFillLinkedin />
        </a>
      </ListGroup.Item>
    </ListGroup>
  </Card>
</Col>))}</Slider></div>)}

export default ClubMemberProfiles