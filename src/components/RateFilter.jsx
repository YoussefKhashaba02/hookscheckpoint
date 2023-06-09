import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const RateFilter = ({ rateFilter, setRateFilter }) => {
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Filter by rate"
          value={rateFilter}
          onChange={(event) => setRateFilter(event.target.value)}
        />
      </InputGroup>
    </div>
  );
};

export default RateFilter;