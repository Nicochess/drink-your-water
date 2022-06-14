import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { createAlarm, setAlarmTimer } from "./utils";

/* global chrome */

function App() {
  const [time, setTime] = useState();
  const [saved, setSaved] = useState(true)
 
  const handleChange = useCallback(({ target }) => {
    setSaved(false)
    setTime(target.value);
  },[setTime]);

  const handleSubmit = () => {
    setSaved(true)
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
      <div className="item">
        <p>Timer (mins)</p>
        <input type="number" onChange={handleChange} value={time} />
      </div>
      <button onClick={handleSubmit} className={!saved && "no-saved"}>Salvar</button>
    </div>
  );
}

export default App;
