import React from "react";
import { Form } from "react-bootstrap";
import './FilterSort.css'
const FilterSort = ({ onSort, type, onTypeChange }) => {
  const handleRadioChange = (event) => {
    onTypeChange(event.target.value);
  };

  return (
    <div className="filter-sort-container">
            <Form.Group className="mb-0">
        <Form.Label>Filter by Event Type:</Form.Label>
        <div>
          <Form.Check
            inline
            label="Solo"
            type="radio"
            id="solo-radio"
            name="event-type"
            value="solo"
            checked={type === "solo"}
            onChange={handleRadioChange}
          />
          <Form.Check
            inline
            label="Team"
            type="radio"
            id="team-radio"
            name="event-type"
            value="team"
            checked={type === "team"}
            onChange={handleRadioChange}
          />
        </div>
      </Form.Group>
      {/* <Form.Group>
        <Form.Label>Sort by:</Form.Label>
        <div>
          <Form.Check
            inline
            label="Rank"
            type="radio"
            id="rank-radio"
            name="sort-by"
            value="rank"
            checked={type !== "score" && onSort === "rank"}
            onChange={() => onSort("rank")}
          />
          <Form.Check
            inline
            label="Score"
            type="radio"
            id="score-radio"
            name="sort-by"
            value="score"
            checked={type !== "rank" && onSort === "score"}
            onChange={() => onSort("score")}
          />
        </div>
      </Form.Group> */}
    </div>
  );
};

export default FilterSort;

       
