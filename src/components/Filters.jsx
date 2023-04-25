import React from "react";
import NameFilter from "./NameFilter";
import RateFilter from "./RateFilter";

const Filters = ({nameFilter, setNameFilter,rateFilter,setRateFilter }) => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <NameFilter nameFilter={nameFilter} setNameFilter={setNameFilter} />
      <RateFilter rateFilter={rateFilter} setRateFilter={setRateFilter} />
    </div>
  );
};

export default Filters;
