import { useState } from "react";

// import "./styles.css";
const data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

export default function App() {
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState(null);
  function sortData(key) {
    let sorted;
    if (sortBy == key) {
      sorted = [...sortedData].reverse();
    } else {
      sorted = [...sortedData].sort((a, b) => a[key] - b[key]);
    }
    setSortedData(sorted);
    setSortBy(key);
  }
  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={() => sortData("date")}>Sort by Date</button>
      <button onClick={() => sortData("views")}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => {
            return (
              <tr key={index + 1}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
