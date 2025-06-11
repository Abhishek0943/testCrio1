import React from "react";

const CountriesSearch = ({ data }) => {
  return (
    <div className="countryCard">
      <img src={data.flag} alt={data.abbr} />
      <h2>{data.name}</h2>
    </div>
  );
};

export default CountriesSearch;