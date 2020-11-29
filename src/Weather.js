import React, { useState } from "react";
import SearchEngine from "./SearchEngine";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Forecast from "./Forecast";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  let [temp, setTemp] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  function showWeather(response) {
    setTemp(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }
  let city = "Tokyo";
  let apiKey = "7a608a2c9f2ddbe4a22465f08c0c779a";
  let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showWeather);
  return (
    <Card className="weather">
      <Card.Body>
        <SearchEngine />

        <div className="title">
          <ul>
            <li>Redondo Beach, CA</li>
            <li className="date">Sun 22 Nov</li>
          </ul>
        </div>

        <Row>
          <Col>
            <div className="current-weather">
              <h3>{description}</h3>
              <Image src={iconUrl} alt={description} />
              <strong className="current-temp">{Math.round(temp)}°C</strong>
            </div>
            <Row>
              <Col className="more-temps">
                <div>
                  <p>Feels: 24°C</p>
                </div>
                <div>
                  <p>High: 25°C</p>
                </div>
                <div>
                  <p>Low: 21°C</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="divider">
            <div className="weather-attributes">
              <ul>
                <li>
                  Wind:<strong> {Math.round(wind)} km/s</strong>
                </li>
                <li>
                  Humidity:<strong> {humidity}%</strong>
                </li>
                <li>
                  Pressure:<strong> 1061 hPa</strong>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Forecast />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
