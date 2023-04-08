import React from 'react';
import './EventDetails.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const EventDetail = ({props}) => {
  return (
    <div className="event-detail-container">
      <h1 className="event-detail-title">{props.name}</h1>
      <div className="event-detail-date">Start-date: {props.start.toLocaleString()} - End-date: {props.end.toLocaleString()}</div>
      <div className="event-detail-location">Location: {props.location}</div>
      <div className="event-detail-description">Details: {props.description}</div>
      {props.registerLink && <NavLink className="event-detail-register" to='/registeration' >Register now</NavLink>}
    </div>
  );
};

export default EventDetail;
