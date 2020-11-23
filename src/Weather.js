import React from "react";
import SearchEngine from "./SearchEngine";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Forecast from "./Forecast";
import "./weather.css";

export default function Weather() {
  return (
    <Card className="weather">
      <Card.Body>
        <Row>
          <Col>
            <div>
              <ul>
                <li>Redondo Beach, CA</li>
                <li>Sun 22 Nov</li>
              </ul>
            </div>
            <div className="current-weather">
              <h3>Clear Sky</h3>
              <Image src=" https://ssl.gstatic.com/onebox/weather/64/sunny.png" />{" "}
              <strong>23°C</strong>
            </div>
            <Row>
              <Col>
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
          <Col>
            <SearchEngine />
            <div>
              <ul>
                <li>
                  Wind:<strong>2 m/s</strong>
                </li>
                <li>
                  Humidity:<strong> 15%</strong>
                </li>
                <li>
                  Pressure:<strong>1061 hPa</strong>
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
