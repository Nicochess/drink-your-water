import React, { useState } from "react";

function App() {
  const api = {
    key: `${process.env.REACT_APP_KEY}`,
    base: "https://api.openweathermap.org/data/2.5/",
  };

  console.log(process.env.REACT_APP_KEY)

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&lang=pt_br&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result)
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro ",
    ];
    let days = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} de ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)}°C</div>
                <div className="weather">{weather.weather[0].description}</div>
              </div>
            </div>
          </>
        ) : undefined}
      </main>
    </div>
  );
}

export default App;
