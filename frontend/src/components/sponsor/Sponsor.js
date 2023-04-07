import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const sponsors = [
  {
    name: 'Company A',
    logo: 'https://via.placeholder.com/150x50',
    website: 'https://www.example.com',
  },
  {
    name: 'Company B',
    logo: 'https://via.placeholder.com/150x50',
    website: 'https://www.example.com',
  },
  {
    name: 'Company C',
    logo: 'https://via.placeholder.com/150x50',
    website: 'https://www.example.com',
  },
  {
    name: 'Company D',
    logo: 'https://via.placeholder.com/150x50',
    website: 'https://www.example.com',
  },
  {
    name: 'Company E',
    logo: 'https://via.placeholder.com/150x50',
    website: 'https://www.example.com',
  },
];

const SponsorsPage = () => {
  return (
    <Container id='sponsor'>
      <Row>
        <Col>
          <h1 className="my-5">Our Sponsors</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {sponsors.map((sponsor) =>{ return (
          <Col md={4} key={sponsor.name}>
            <Card className="my-4">
              <Card.Body>
                <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                  <Card.Img src={sponsor.logo} className="img-fluid" alt={`${sponsor.name} logo`} />
                </a>
              </Card.Body>
            </Card>
          </Col>
        )})}
      </Row>
    </Container>
  );
};

export default SponsorsPage;
