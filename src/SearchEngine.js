import React, { useState } from "react";
import WeatherData from "./WeatherData";
import Loader from 'react-loader-spinner'
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
      <Loader
         type="TailSpin
         "
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000}/>
    </div>
  );
}
