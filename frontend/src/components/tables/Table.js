import { Table } from 'react-bootstrap';

function EventScheduleTable({index}) {
  const events = [
    [{ time: '8.30 AM', name: 'Reporting Time', venue: 'Civil AV Hall' },
    { time: '9.00 AM', name: 'Opening Ceremony', venue: 'Civil AV Hall' },
    { time: '9.30 AM', name: 'Reporting To Competition Arena', venue: 'Smart Class Room CSIT Department' },
    { time: '10.00 AM', name: 'Briefing On Competition Guidelines', venue: 'Smart Class Room CSIT Department' },
    { time: '10.30 AM', name: 'Web Kode Competition', venue: 'Smart Class Room CSIT Department' },
    { time: '12.30 PM', name: 'The Hour Of Judgement', venue: 'Smart Class Room CSIT Department' },
    { time: '1.00 PM', name: 'Namaz Break', venue: 'Jama-e-Masjid NED' },
    { time: '2.00 PM', name: 'Lunch Time', venue: 'Rooms 1 & 2 CSIT Department' },
    { time: '3.00 PM', name: 'Closing Ceremony & Awards Distribution', venue: 'Civil AV Hall' }],    [{ time: '8.30 AM', name: 'Registration', venue: 'Conference Room A' },
    { time: '9.00 AM', name: 'Opening Keynote', venue: 'Main Hall' },
    { time: '10.00 AM', name: 'Workshop: Introduction to React', venue: 'Workshop Room 1' },
    { time: '11.30 AM', name: 'Panel Discussion: Future of Technology', venue: 'Conference Room B' },
    { time: '1.00 PM', name: 'Lunch Break', venue: 'Cafeteria' },
    { time: '2.00 PM', name: 'Hackathon Begins', venue: 'Lab 1' },
    { time: '4.30 PM', name: 'Networking Session', venue: 'Lounge Area' },
    { time: '6.00 PM', name: 'Closing Ceremony', venue: 'Main Hall' }]
  ];
  return (
    <Table bordered={false} className="event-schedule-table text-light">
      <thead>
        <tr>
          <th width ="17%">Time</th>
          <th>Event</th>
          <th>Venue</th>
        </tr>
      </thead>
      <tbody>
        {events[index].map((event, index) => (
          <tr key={index}>
            <td>{event.time}</td>
            <td>{event.name}</td>
            <td>{event.venue}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default EventScheduleTable
// Usage example:

