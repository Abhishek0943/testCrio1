import { useEffect, useState } from "react";
import axios from "axios";
import CountriesSearch from "./Components/CountriesSearch";

function App() {
  const [countryData, setCountryData] = useState([]);
  const fetchCountryData = async () => {
    let url = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";
    try {
      let response = await axios.get(url);
      setCountryData(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchCountryData();
  }, []);





  return (
    <div>
     
      <div className="App">
        {countryData &&
          countryData.map((ele) => <CountriesSearch data={ele} />)}
      </div>
    </div>
  );
}

export default App;