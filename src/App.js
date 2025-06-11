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
      <h1>select contry</h1>
      <div>
        <select onChange={(e) => setCountry(e.target.value)}>
          <option defaultValue={""} >select a contory</option>
          {
            countryData?.map((e, i) => {
              return (
                <option value={e} key={`${e}-${i}`}>{e}</option>
              )
            })
          }
        </select>
        <select disabled={!states.length>0 } onChange={(e) => setState(e.target.value)}>
          <option defaultValue={""} >select a state</option>
          {
            states?.map((e, i) => {
              return (
                <option value={e} key={`${e}-${i}`}>{e}</option>
              )
            })
          }
        </select>
        <select disabled={!cities.length>0 } onChange={(e) => setCiti(e.target.value)}>
          <option defaultValue={""} >select a citi</option>
          {
            cities?.map((e, i) => {
              return (
                <option value={e} key={`${e}-${i}`}>{e}</option>
              )
            })
          }
        </select>
      </div>
      {
        country && state&& citi&&
      <p style={{display:"flex"}}>you seleced <p>{country}</p> , <p>{state}, {citi}</p> </p>
      }
    </div>
  );
}

export default App;
