import React, { useState } from "react";
import AddMovie from "./AddMovie.jsx";
import Filters from "./Filters";
import Button from "react-bootstrap/Button";

const ActionsBar = ({nameFilter, setNameFilter,rateFilter,setRateFilter, addNewMovie}) => {
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Filters nameFilter={nameFilter} setNameFilter={setNameFilter} rateFilter={rateFilter} setRateFilter={setRateFilter}/>
      <Button variant="primary" onClick={handleOpen}>
        Add new Movie
      </Button>
      <AddMovie show={show} handleClose={handleClose} addNewMovie={addNewMovie} />
    </div>
  ); 
};

export default ActionsBar;
