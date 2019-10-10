import React from "react";

const temperature = props => {
  const kelvin = 273.14;
  let component = null;

  if (props.weather && props.weather.length > 0) {
    const iconURL = `http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`;
    component = (
      <span className="icon-weather">
        <img src={iconURL} alt="props.weather[0].main" />
      </span>
    );
  }

  return (
    <div className="temperature">
      {component}
      <span className="info">
        {parseInt(props.temperature - kelvin, 10)} <em>°C</em>
      </span>
    </div>
  );
};

export default temperature;
