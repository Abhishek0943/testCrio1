import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countryData, setCountryData] = useState([]);
  const [country, setCountry] = useState("")
  const [states, setStates] = useState([]);
  const [cities, setcities] = useState([]);
  const [state, setState] = useState("")
  const [citi, setCiti] = useState("")
  const fetchCountryData = async () => {
    let url = "https://crio-location-selector.onrender.com/countries";
    try {
      let response = await axios.get(url);
      console.log(response.data)
      setCountryData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    fetchCountryData();
  }, []);
  useEffect(() => {
    let url = `https://crio-location-selector.onrender.com/country=${country}/states`;
    axios.get(url).then((res) => {
      setStates(res.data)
    }).catch((error)=>{

    })
    
  }, [country]);
  useEffect(() => {
    let url = `https://crio-location-selector.onrender.com/country=${country}/state=${state}/cities`;
    axios.get(url).then((res) => {
      setcities(res.data)
    }).catch((error)=>{

    })
    
  }, [state, country]);

  return (
  <div>
  <h1>Select Country</h1>
  <div>
    <select onChange={(e) => setCountry(e.target.value)} defaultValue="">
      <option value="" disabled>Select a country</option>
      {countryData?.map((e, i) => (
        <option value={e} key={`${e}-${i}`}>{e}</option>
      ))}
    </select>

    <select onChange={(e) => setState(e.target.value)} disabled={!states.length} defaultValue="">
      <option value="" disabled>Select a state</option>
      {states?.map((e, i) => (
        <option value={e} key={`${e}-${i}`}>{e}</option>
      ))}
    </select>

    <select onChange={(e) => setCiti(e.target.value)} disabled={!cities.length} defaultValue="">
      <option value="" disabled>Select a city</option>
      {cities?.map((e, i) => (
        <option value={e} key={`${e}-${i}`}>{e}</option>
      ))}
    </select>
  </div>

  {country && state && citi && (
    <p>You selected {citi}, {state}, {country}</p>
  )}
</div>
  );
}

export default App;
