import Axios from "axios";
import React, { useState } from "react";

export default function Weather(props) {
  let [temp, setTemp] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  function showTemp(response) {
    setTemp(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }
  let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.name}&appid=7a608a2c9f2ddbe4a22465f08c0c779a&units=metric`;
  Axios.get(url).then(showTemp);
  return (
    <ul className="weatherData">
      <li>{props.name}</li>
      <li>
        Temperature:{""}
        {Math.round(temp)}°C
      </li>
      <li>
        Description:{""}
        {description}
      </li>
      <li>
        Humidity:{""}
        {humidity}%
      </li>
      <li>
        Wind:{""}
        {Math.round(wind)}km/s
      </li>
      <li>
        <img src={iconUrl} alt={description} />
      </li>
    </ul>
  );
}
