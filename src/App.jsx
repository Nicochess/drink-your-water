import { useState } from 'react';
import './App.css';

/* global chrome */

function App() {

  const [time, setTime] = useState(() => {
    const getTimer = chrome.storage.local.get("timer") || 120
    return getTimer
  })

  const handleChange = (e) => {
    console.log(e)
  }

  const handleSubmit = () => {

  }

  return (
    <div className="app">
      <h1>Configure Your Water</h1>
      <p>Não deixei de beber água, está na hora.</p>
      <input type="number" onChange={handleChange} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default App;
