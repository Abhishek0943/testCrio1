import { useEffect, useState } from "react";
import axios from "axios";
import CountriesSearch from "./Components/CountriesSearch";

function App() {
  const [countryData, setCountryData] = useState([]);
  const fetchCountryData = async () => {
    let url = "https://xcountries-backend.azurewebsites.net/all";
    try {
      let response = await axios.get(url);
      setCountryData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <div>
      <div className="App">
        {countryData.length > 0 ? (
          countryData.map((ele) => <CountriesSearch data={ele} />)
        ) : loading ? (
          <h1>loading....</h1>
        ) : (
          <h1>No data Found</h1>
        )}
      </div>
    </div>
  );
}

export default App;
