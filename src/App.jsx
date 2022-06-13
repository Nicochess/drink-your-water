import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { createAlarm, setAlarmTimer } from "./utils";

/* global chrome */

function App() {
  const [time, setTime] = useState();
 
  const handleChange = useCallback(({ target }) => {
    setTime(target.value);
  },[setTime]);

  const handleSubmit = () => {
    setAlarmTimer(time)
    chrome.alarms.clear("drink water")
    createAlarm()
  };

  useEffect(() => {
    chrome.storage.local.get(["timer"], ({ timer }) => {
      setTime(timer); 
    });
  }, []);

  return (
    <div className="app">
      <h1>Configure Your Water</h1>
      <p>Não deixei de beber água, está na hora.</p>
      <input type="number" onChange={handleChange} value={time} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default App;
