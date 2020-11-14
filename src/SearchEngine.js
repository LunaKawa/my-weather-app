import React, { useState } from "react";
import WeatherData from "./WeatherData";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [message, showMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    showMessage(<WeatherData name={city} />);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="search.." onChange={updateCity} />
        <input type="submit" />
      </form>
      <h2>{message}</h2>
    
    </div>
  );
}
