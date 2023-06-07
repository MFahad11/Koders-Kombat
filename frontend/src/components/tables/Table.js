import { Table } from 'react-bootstrap';

function EventScheduleTable() {
    const events = [
        { time: '10:00 AM', name: 'Event 1', venue: 'Venue 1' },
        { time: '2:00 PM', name: 'Event 2', venue: 'Venue 2' },
        { time: '5:00 PM', name: 'Event 3', venue: 'Venue 3' },
      ];
  return (
    <Table bordered={false} className="event-schedule-table text-light">
      <thead>
        <tr>
          <th>Time</th>
          <th>Event</th>
          <th>Venue</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event, index) => (
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

