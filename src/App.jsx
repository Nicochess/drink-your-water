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
      <h1>Configure seu lembrete</h1>
      <p>Me lembre de beber água a cada <input type="number" onChange={handleChange} value={time} /> minuto(s).</p>
      <button onClick={handleSubmit}>Salvar</button>
    </div>
  );
}

export default App;
