import { useEffect, useState } from "react";
// import "./styles.css";

export default function App() {
  const [isRunning, setRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 1);
        // console.log(currentTime);
      }, 1000);
    } else if (!isRunning && currentTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const resetTimer = () => {
    setRunning(false);
    setCurrentTime(0);
  };

  const toggle = () => {
    setRunning((prevState) => !prevState);
  };

  const formatTime = (time) => {
    // console.log(time);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p className="time">Time: {formatTime(currentTime)}</p>
      <button onClick={toggle}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
