import React from "react";
import Moment from "react-moment";
import Temperature from "./Temperature";
import svgSun from "../css/img/sun-icon.svg";
import svgMoon from "../css/img/moon-icon.svg";

const Weather = props => {
  const { name, dt, main, wind, weather, visibility, sys } = props.weather;

  if (!name) return null;
  return (
    <div className="card-panel white col s12 weather-panel">
      <h1>{name}</h1>
      <h2>
        <Moment format="dddd, hh:mm A">{dt * 1000}</Moment>
      </h2>
      <h3>{weather.length > 0 ? weather[0].description : ""}</h3>

      <div className="header-info">
        <Temperature temperature={main.temp} weather={weather} />

        <ul className="details">
          <li>Humidity: {main.humidity}%</li>
          <li>Pressure: {main.pressure} hPa</li>
          <li>Wind: {parseFloat(wind.speed * 3.6).toFixed(2)} km/h</li>
          {visibility ? (
            <li>Visibility: {parseFloat(visibility / 1000)} km</li>
          ) : null}
        </ul>
      </div>

      <div className="sunrise-sunset">
        <span className="sunrise">
          <h1>SUNRISE/SUNSET</h1>
          <h4>Sunrise:</h4>
          <h2>
            <Moment format="hh:mm A">{sys.sunrise * 1000}</Moment>
          </h2>

          <span className="icon">
            <img src={svgSun} alt="Sunrise" width="62" height="62" />
          </span>
        </span>

        <span className="sunset">
          <h1>MOONRISE/MOONSET</h1>
          <h4>Moonrise:</h4>
          <h2>
            <Moment format="hh:mm A">{sys.sunset * 1000}</Moment>
          </h2>

          <span className="icon">
            <img src={svgMoon} alt="Sunset" width="62" height="62" />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Weather;
