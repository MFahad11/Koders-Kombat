import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import Modal from 'react-modal';
import dayGridPlugin from '@fullcalendar/daygrid';
import RegistrationForm from '../register/RegistrationForm';
import './Calendar.css'
import Dialog from '../modal/Modal';
import Membership from '../membership/Membership';
import EventDetails from '../eventdetails/EventDetails';
Modal.setAppElement("#root")
const Calendar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [eventTypeFilter, setEventTypeFilter] = useState('all');
  const [show, setShow] = useState(false);
  const [data,setData]=useState({})
  const [type,setType]=useState("")
  const [events, setEvents] = useState([
// Workshop event
{
  title: 'Web Development Workshop',
  start: '2023-05-15',
  name: 'Introduction to HTML and CSS',
  end: '2023-05-15',
  type: 'workshop',
  location: '123 Main St, Anytown USA',
  description: 'Learn the basics of building web pages with HTML and CSS.',
  registerLink: 'https://example.com/workshop-registration'
},

// Hackathon event
{
  title: 'Hackathon',
  start: '2023-06-30',
  name: 'Code for a Cause',
  end: '2023-07-02',
  type: 'hackathon',
  location: '456 Elm St, Anytown USA',
  description: 'Join us for a weekend of hacking for a good cause. Work on real-world projects that make a positive impact in your community.',
  registerLink: 'https://example.com/hackathon-registration'
},

// Guest lecture event
{
  title: 'Guest Lecture Series',
  start: '2023-08-10',
  name: 'Artificial Intelligence and Ethics',
  end: '2023-08-10',
  type: 'lecture',
  location: '789 Oak St, Anytown USA',
  description: 'Join us for a thought-provoking talk on the ethical considerations surrounding artificial intelligence.',
  registerLink: 'https://example.com/guest-lecture-registration'
}

      ]);
      const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
      };
    
      const handleEventTypeFilterChange = (event) => {
        setEventTypeFilter(event.target.value);
      };
      const filteredEvents = events.filter((event) => {
        return (
          (event.title.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === '') &&
          (eventTypeFilter === 'all' || event.type === eventTypeFilter)
        );
      });    
      function handleEventClick(event) {
setShow(true)
setData({
  title:event.event.title,
  ...event.event.extendedProps,
  ...event.event._instance.range
})
setType(event.event.extendedProps.type.toUpperCase())
      }
  return (
    <>
      <div>
        <input type="text" placeholder="Search events" value={searchQuery} onChange={handleSearchInputChange} />
        <select value={eventTypeFilter} onChange={handleEventTypeFilterChange}>
          <option value="all">All events</option>
          <option value="workshop">Workshops</option>
          <option value="lecture">Guest lectures</option>
          <option value="hackathon">Hackathon</option>
          {/* Add more event types here */}
        </select>
      </div>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={filteredEvents}
        eventClick={(event) => handleEventClick(event)} editable={true}/>
        <Dialog show={show} setShow={setShow} elem={<EventDetails props={data}/>} title={type}/>
    </>
  )
}

export default Calendar
