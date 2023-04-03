import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function RegistrationForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [participationType, setParticipationType] = useState('');
  const [teamName, setTeamName] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);

  const handleFullNameChange = event => setFullName(event.target.value);
  const handleEmailChange = event => setEmail(event.target.value);
  const handleParticipationTypeChange = event => setParticipationType(event.target.value);
  const handleTeamNameChange = event => setTeamName(event.target.value);
  const handleTeamMembersChange = event => setTeamMembers(event.target.value.split(','));

  const handleSubmit = async(event) => {
    event.preventDefault();
    
    const response=await axios.post('http://localhost:4500/user/register',{ fullName, email, participationType, teamName, teamMembers })
    console.log(response)
    setFullName("");
    setEmail("");
    setParticipationType("");
    setTeamName("");
    setTeamMembers([])
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="participationType">
        <Form.Label>Participation Type</Form.Label>
        <Form.Control as="select" value={participationType} onChange={handleParticipationTypeChange}>
          <option value="">--Please select--</option>
          <option value="solo">Solo</option>
          <option value="team">Team</option>
        </Form.Control>
      </Form.Group>
      {
        participationType==="solo" && (
          <>
      <Form.Group controlId="lastName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your full name" value={fullName} onChange={handleFullNameChange} />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email address" value={email} onChange={handleEmailChange} />
      </Form.Group>
          </>
        )
      }
      {participationType === 'team' && (
        <>
          <Form.Group controlId="teamName">
            <Form.Label>Team Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your team name" value={teamName} onChange={handleTeamNameChange} />
          </Form.Group>

          <Form.Group controlId="teamMembers">
            <Form.Label>Team Members (comma-separated)</Form.Label>
            <Form.Control type="text" placeholder="Enter your team members" value={teamMembers} onChange={handleTeamMembersChange} />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address of team lead</Form.Label>
            <Form.Control type="email" placeholder="Enter your email address" value={email} onChange={handleEmailChange} />
          </Form.Group>
        </>
      )}

      <Button variant="primary" type="submit">Register</Button>
    </Form>
  );
}

export default RegistrationForm;
