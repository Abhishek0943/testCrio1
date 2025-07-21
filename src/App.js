import { useEffect, useState } from "react";
import "./styles.css";
const key = "624a02b1b8d54df3a44152348232710";

function Card({ name, value }) {
  return (
    <div className="weather-card">
      <b>{name}</b>
      <p>{value}</p>
    </div>
  );
}
export default function App() {
  const [city, setCity] = useState("");
  const [isCityAdded, setCityAdded] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (isCityAdded) {
      try {
        async function fetchApi() {
          const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`
          )
            .then((res) => res.json())
            .then((data) => {
              setData(data);
              return data;
            });
          if (res.error) {
            alert("Failed to fetch weather data");
            setCityAdded(false);
          }
          setLoading(false);
        }
        fetchApi();
      } catch (err) {
        console.log(err);
        alert("Failed to fetch weather data");
        setCityAdded(false);
      } finally {
        setCityAdded(false);
      }
    }
  }, [isCityAdded, city]);

  function handleButton(e) {
    e.preventDefault();
    console.log("Clicked");
    console.log(city);
    setLoading(true);
    setCityAdded(true);
  }
  return (
    <div className="App">
      <form action="" onSubmit={handleButton}>
        <input
          name="search"
          type="text"
          placeholder="Enter city name"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading data...</p>}
      {data.current && !loading && (
        <div className="weather-cards">
          <Card name={"Temperature"} value={data?.current?.temp_c + "°C"} />
          <Card name={"Humidity"} value={data?.current?.humidity + "%"} />
          <Card name={"Condition"} value={data?.current?.condition.text} />
          <Card name={"Wind Speed"} value={data?.current?.wind_kph + " kph"} />
        </div>
      )}
    </div>
  );
}
