import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [members, setMembers] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const allMembers = useRef([]);
  const pages = useRef(null);

  const getMembers = async () => {
    try {
      const res = await axios.get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      setMembers(res.data.slice(0, 10));
      allMembers.current = res.data;
      pages.current = Math.round(res?.data.length / 10);
    } catch (err) {
      alert("failed to fetch data");
    }
  };

  const handlePrev = () => {
    if (pageNo > 1) setPageNo((prev) => prev - 1);
  };

  const handleNext = () => {
    if (pageNo < pages.current) setPageNo((prev) => prev + 1);
  };

  useEffect(() => {
    setMembers(allMembers.current.slice((pageNo - 1) * 10, pageNo * 10));
  }, [pageNo]);

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <div className="app">
      <h1>Employee Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {members?.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="btn-div">
        <button onClick={handlePrev}>Previous</button>
        <button>{pageNo}</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default App;
