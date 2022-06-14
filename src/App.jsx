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
    window.close()
  };

  useEffect(() => {
    chrome.storage.local.get(["timer"], ({ timer }) => {
      setTime(timer); 
    });
  }, []);

  return (
    <div className="app">
      <div class="item">
        <p>Timer (mins)</p>
        <input type="number" onChange={handleChange} value={time} />
      </div>
      <button onClick={handleSubmit}>Salvar</button>
    </div>
  );
}

export default App;
