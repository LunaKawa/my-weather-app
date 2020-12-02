import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Conversion from "./Conversion";
import "./searchengine.css";

export default function SearchEngine() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`${city}`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <Row>
      <Col className="d-flex justify-content-end">
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
              Search
            </button>
            <Conversion />
          </form>
        </div>
      </Col>
    </Row>
  );
}
