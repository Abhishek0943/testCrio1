import { useEffect, useState } from "react";
import axios from "axios";
import CountriesSearch from "./Components/CountriesSearch";

function App() {
  const [countryData, setCountryData] = useState([]);
  const [filterCountryData, setFilterCountryData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const fetchCountryData = async () => {
    let url = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";
    try {
      let response = await axios.get(url);
      setCountryData(response.data);
      setFilterCountryData(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  const searchCountries = async () => {
    if (searchText === "") {
      setFilterCountryData(countryData);
    }

    let url = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

    try {
      let response = await axios.get(url);

      const filteredData = response.data.filter((country) =>
        country.common.toLowerCase().includes(searchText.toLowerCase())
      );

      setFilterCountryData(filteredData);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    searchCountries();
  }, [searchText]);

  return (
    <div>
      <div className="searchSection">
        <form>
          <input
            type="text"
            placeholder="Search for countries..."
            value={searchText}
            onChange={(e) => handleChange(e)}
          />
        </form>
      </div>
      <div className="App">
        {filterCountryData &&
          filterCountryData.map((ele) => <CountriesSearch data={ele} />)}
      </div>
    </div>
  );
}

export default App;