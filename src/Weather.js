import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Forecast from "./Forecast";
import axios from "axios";
import SearchEngine from "./SearchEngine";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import "./weather.css";

export default function Weather() {
  const [WeatherData, setWeatherData] = useState({ ready: false });
  function showWeather(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/sunny.png`,
    });
  }

  if (WeatherData.ready) {
    return (
      <Card className="weather">
        <Card.Body>
          <SearchEngine />

          <div className="title">
            <h2>{WeatherData.name}</h2>
            <h5>
              {" "}
              <FormattedDate date={WeatherData.date} />
            </h5>
            <h5>
              <FormattedTime date={WeatherData.date} />
            </h5>
          </div>

          <Row>
            <Col className="4">
              <div className="current-weather">
                <h3>{WeatherData.description}</h3>
                <Image
                  src={WeatherData.iconUrl}
                  alt={WeatherData.description}
                />
                <strong className="current-temp">
                  {Math.round(WeatherData.temp)}°C
                </strong>
              </div>
              <Row>
                <Col className="more-temps">
                  <div>
                    <p>Feels: {Math.round(WeatherData.feelsLike)}°C</p>
                  </div>
                  <div>
                    <p>High: {Math.round(WeatherData.maxTemp)}°C</p>
                  </div>
                  <div>
                    <p>Low: {Math.round(WeatherData.minTemp)}°C</p>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col className="divider md-4">
              <div className="weather-attributes">
                <ul>
                  <li>
                    Wind:
                    <strong> {Math.round(WeatherData.windSpeed)}m/s</strong>
                  </li>
                  <li>
                    Humidity:<strong> {WeatherData.humidity}%</strong>
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
  } else {
    let city = "Berlin";
    let apiKey = "7a608a2c9f2ddbe4a22465f08c0c779a";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);

    return "Loading...";
  }
}
