import { useCallback, useEffect, useState } from "react";
import "./App.css";

/* global chrome */

function App() {
  const [time, setTime] = useState();

  useEffect(() => {
    chrome.storage.local.get(["timer"], ({ timer }) => {
      setTime(timer);
    });
  }, []);

  const handleChange = useCallback(
    ({ target }) => {
      setTime(target.value);
    },
    [setTime]
  );

  const handleSubmit = () => {
    chrome.storage.local.set({ timer: time });
  };

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
