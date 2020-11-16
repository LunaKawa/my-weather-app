import React from "react";
import SearchEngine from "./SearchEngine";
import "./weather.css";


export default function Weather () {
    return (
    <div className="card">
        <div className="card-body">
               <SearchEngine/>
          <div className="row">
            <div className="col">
            <div className="DisplayConsole">
               <div className="title">
        <h1>
          <span>Los Angeles</span>
        </h1>
        <h5>Monday Sept 14, 2020</h5>
      </div>
      <div className="CurrentWeather">
        <div>
          <h3>Clear Sky</h3>
          <img
            className="TodayWthrIcon"
            src=" https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="clear sky"
          />
          <h3>
            <span>19</span>º
          </h3>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col WthrCha">
          <div className="row MoreTemps">
            <div className="col">
              <p>
                Feels: <span id="real-feel">76</span>º
              </p>
            </div>
            <div className="col">
              <p>
                High: <span id="max">76</span>º
              </p>
            </div>
            <div className="col">
              <p>
                Low: <span id="min">76</span>º
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
            <div className="col">
            <div className="row more-info d-flex">
            <div className=" details-wrapper">
              <ul>
                <li>
                  Wind <i class="fas fa-wind"></i>
                </li>
                <li>
                  Humidity <i class="fas fa-percentage"></i>
                </li>
                <li>
                  Pressure <i class="fas fa-weight"></i>
                </li>
              </ul>
            </div>
            <div className="details-wrapper data">
              <ul>
                <li>
                  <span id="wind-speed"></span> m/s
                </li>
                <li>
                  <span id="humidity"></span> %
                </li>
                <li>
                  <span id="pressure"></span> hPa
                </li>
              </ul>
            </div>
          </div>
            </div>
          </div>
        </div>
    </div>
    )
}