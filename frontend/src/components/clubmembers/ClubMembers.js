import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const ClubMemberProfile = ({ name, position, bio, imageUrl, socialLinks }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{position}</Card.Subtitle>
        <Card.Text>{bio}</Card.Text>
        {socialLinks && (
          <ListGroup className="mt-3">
            {Object.keys(socialLinks).map((linkName, index) => (
              <ListGroupItem key={index}>
                <a href={socialLinks[linkName]}>{linkName}</a>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );
};

export default ClubMemberProfile;
