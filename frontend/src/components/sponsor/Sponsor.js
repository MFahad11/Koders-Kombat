import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import logo from './Corporate_Sponsor_Image.png'
import logo1 from './virtual-meetings-sponsorships.webp'
import './Sponsor.css'
const sponsors = [
  {
    name: 'Company A',
    logo: logo,
    website: 'https://www.example.com',
  },
  {
    name: 'Company B',
    logo: logo1,
    website: 'https://www.example.com',
  },
  {
    name: 'Company C',
    logo: logo,
    website: 'https://www.example.com',
  },
  {
    name: 'Company D',
    logo: logo1,
    website: 'https://www.example.com',
  },
  {
    name: 'Company E',
    logo: logo,
    website: 'https://www.example.com',
  },
];

const SponsorsPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Container id='sponsor' className='mb-4'>
      <Row>
        <Col className='text-center'>
          <h2 className="my-5 sponsor-header">Our Sponsors</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {sponsors.map((sponsor, index) => (
          <Col md={4} key={sponsor.name}>
            <Card className="my-4"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(0.96)',
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              <Card.Body>
                <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                  <Card.Img src={sponsor.logo} className="img-fluid" alt={`${sponsor.name} logo`} />
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SponsorsPage;
