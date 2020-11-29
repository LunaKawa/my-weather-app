import React, { useState } from "react";
import Weather from "./Weather";
import Conversion from "./Conversion";
import "./searchengine.css";

export default function SearchEngine() {
  let [city, setCity] = useState("Tokyo");
  let [message, showMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    showMessage(<Weather name={city} />);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="searchEngine">
      <form onSubmit={handleSubmit}>
        <input
          className="search"
          type="search"
          placeholder="search.."
          onChange={updateCity}
        />
        <button type="button" className="btn btn-outline-light">
          <i class="fas fa-map-marker-alt"></i>
          Location
        </button>
        <Conversion />
      </form>
      <h2>{message}</h2>
    </div>
  );
}
