import React, { useState } from "react";
import iconCache from "./index.js";

const api = {
  key: "12e00237bfa97ce2179ee3dbcc8729bd",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
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
        <div className="search">
          <input
            className="search-box"
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <div className="notification">
          <p></p>
        </div>
        {typeof weather.main != "undefined" ? (
          <div className="container">
            <img
              className="icon"
              src={iconCache[weather.weather[0].icon]}
              alt="unknown"
            />
            <div className="description">
              <p>{weather.weather[0].main}</p>
            </div>
            <div className="temperature">
              <p>
                {Math.floor(weather.main.temp)} °<span>C</span>
              </p>
            </div>
            <div className="feelslike">
              <p>
                Feels Like {Math.floor(weather.main.feels_like)} °<span>C</span>
              </p>
            </div>
            <div className="humidity">
              <p>Humidity {weather.main.humidity}%</p>
            </div>
            <div className="location">
              <p>
                {weather.name}, {weather.sys.country}
              </p>
            </div>
          </div>
        ) : (
          <div className="container">
            <img className="icon" src={iconCache["unknown"]} alt="unknown" />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
