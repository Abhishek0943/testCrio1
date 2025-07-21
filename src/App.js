import { useState } from "react";

// import "./styles.css";
const dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

export default function App() {
  const [input, setInput] = useState("");
  const [def, setDef] = useState("");
  function handleSearch() {
    const res = dictionary.find(
      (item) => item.word.toLowerCase() === input.toLowerCase()
    );
    if (res?.meaning) {
      setDef(res.meaning);
    } else {
      setDef("Word not found in the dictionary.");
    }
  }
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      
      <b>Definition:</b>
      
      <p>{def}</p>
    </div>
  );
}
