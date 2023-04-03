import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import Modal from 'react-modal';
import dayGridPlugin from '@fullcalendar/daygrid';
import RegistrationForm from '../register/RegistrationForm';
import './Calendar.css'
Modal.setAppElement("#root")
const Calendar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [form, setForm] = useState(false);
  const [eventDetails, setEventDetails] = useState({});
    const [events, setEvents] = useState([
        {
          title: 'Event 1',
          start: '2023-04-01',
          end: '2023-04-01',
        },
        {
          title: 'Event 2',
          start: '2023-04-05',
          end: '2023-04-05',
        },
        {
            title: 'Event 3',
            start: '2023-03-05',
            end: '2023-03-05',
          },
      ]);
      
      function handleEventClick(info) {
        setModalIsOpen(true);
        setForm(false)
        setEventDetails(info.event);
      }
      const closeModal = () => {
        setModalIsOpen(false);
      }
      const showForm = () => {
        setForm(form=>!form);
      }
      const modalContent = (
        <div>
          <h2>{eventDetails.title}</h2>
          <p>Start: {eventDetails.start?.toLocaleString()}</p>
          <p>End: {eventDetails.end?.toLocaleString()}</p>
          <button style={{zIndex:"10000"}} onClick={closeModal}>Close</button>
          <button style={{zIndex:"10000"}} onClick={showForm}>Register</button>
        </div>
      );
  return (
    <>
      <Modal isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="ModalOverlay"
        style={{
          overlay: {
            zIndex: 1000,
          },
        }}>
        {form?<RegistrationForm/>:modalContent}
      </Modal>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} editable={true} eventClick={handleEventClick} />
    </>
  )
}

export default Calendar
