import React from "react";

const CountriesSearch = ({ data }) => {
  return (
    <div className="countryCard">
      <img src={data.png} alt={data.common} />
      <h2>{data.common}</h2>
    </div>
  );
};

export default CountriesSearch;