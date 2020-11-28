import React from "react";
import Container from "react-bootstrap/Container";
import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Weather />
        <footer>
          This app was coded by{" "}
          <a
            href="https://www.linkedin.com/in/luna-kawahara-109b8b118/"
            target="_blank"
          >
            Luna Kawahara
          </a>{" "}
          and is{" "}
          <a href="https://github.com/LunaKawa/my-weather-app" target="_blank">
            open-source
          </a>
        </footer>
      </Container>
    </div>
  );
}
