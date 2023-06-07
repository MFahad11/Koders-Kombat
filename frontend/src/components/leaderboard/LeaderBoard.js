import React,{ useState } from 'react';
import { Table, Dropdown, FormControl } from 'react-bootstrap';
import './LeaderBoard.css'
import Dialog from '../modal/Modal';
const events = [
  {
    "name": "Hackbot Fest",
    "type": "solo",
    "leaderboard": [
      {
        "rank": 1,
        "name": "Sameed Hussain",
        "department": "CSIT"
      },
      {
        "rank": 2,
        "name": "Akhlaq Ahmed Shaikh",
   
        "department": "CSIT"
      },
      {
        "rank": 3,
        "name": "Fahad Ahad",
    
        "department": "CSIT"
      }
    ]
  },
  {
    "name": "Koderz Kombat'22",
    "type": "team",
    "leaderboard": [
      {
        "rank": 1,
        "name": "Code Morphers",
       
        "department": "SE"
      },
      {
        "rank": 2,
        "name": "Team Pluto",
       
        "department": "CSIT"
      },
      {
        "rank": 3,
        "name": "Tiest Developers",
        
        "department": "TIEST(CS)"
      },
      
    ]
  },
  {
    "name": "Koderz Kombat'23",
    "type": "team",
    "leaderboard": [
      {
        "rank": 1,
        "name": "Runtime TError",
     
        "department": "CSIT"
      },
      {
        "rank": 2,
        "name": "Phoneix_Editz",
    
        "department": "CSIT(AI)"
      },
      {
        "rank": 3,
        "name": "ASM",
    
        "department": "CSIT"
      }
    ]
  },
  {
    "name": "WEB KODE'23",
    "type": "team",
    "leaderboard": [
      {
        "rank": 1,
        "name": "Co'De Grace",
        
        "department": "CSIT"
      },
      {
        "rank": 2,
        "name": "Team Pluto",
     
        "department": "CSIT"
      },
      {
        "rank": 3,
        "name": "TIEST Developers",
    
        "department": "CSIT"
      }
    ]
  },
];

function Leaderboard() {
  const [eventType, setEventType] = useState(events[0].type);
  const [eventName, setEventName] = useState(events[0].name);
  const [searchText, setSearchText] = useState('');

  const handleEventTypeChange = (event) => {
    setEventType(event.target.name);
    setEventName(events.find(e => e.type === event.target.name).name);
  };

  const handleEventNameChange = (event) => {
    setEventName(event.target.name);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  }
  const filteredLeaderboard = events.find(e => e.name === eventName).leaderboard.filter(l => l.name.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div className="leaderboard">
  <h1 className="leaderboard-heading">{eventName}</h1>
  <div className="leaderboard-dropdowns">
    <Dropdown className="leaderboard-dropdown">
      <Dropdown.Toggle variant="primary" id="event-type-dropdown">
        Type
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          value={'solo'}
          name={'solo'}
          onClick={handleEventTypeChange}
        >
          Solo Event
        </Dropdown.Item>
        <Dropdown.Item
          value={'team'}
          name={'team'}
          onClick={handleEventTypeChange}
        >
          Team Event
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown className="leaderboard-dropdown">
      <Dropdown.Toggle variant="primary" id="event-name-dropdown">
        {eventName}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {events
          .filter((e) => e.type === eventType)
          .map((event) => (
            <Dropdown.Item
              key={event.name + event.type}
              value={event.name}
              name={event.name}
              onClick={handleEventNameChange}
            >
              {event.name}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  </div>
  <div className="leaderboard-search">
    <FormControl
      type="text"
      placeholder="Search by name"
      className="my-2"
      onChange={handleSearchTextChange}
    />
  </div>
  <Table className="leaderboard-table" striped bordered hover>
    <thead>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Department</th>
      </tr>
    </thead>
    {/* Table Body */}
    <tbody>
      {filteredLeaderboard.map((leaderboardItem) => (
        <tr key={leaderboardItem.rank}>
          <td>{leaderboardItem.rank}</td>
          <td>{leaderboardItem.name}</td>
          <td>{leaderboardItem.department}</td>
        </tr>
      ))}
    </tbody>
  </Table>
</div>

  );
}

const LeaderBoard = () => {
    const [show,setShow]=useState(true)
    return (
      <>
        <Dialog show={show} setShow={setShow} elem={<Leaderboard/>} title={"Leaderboard"}/>
      </>
    )
}

export default LeaderBoard
