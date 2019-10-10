import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Error from "./components/Error";
import Header from "./components/Header";
import Weather from "./components/Weather";

const App = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    if (city === "" || country === "") return;

    const callAPI = async () => {
      const APPID = "aae925282e212f53c72f3841e41dd370";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APPID}`;

      const response = await fetch(url);
      const result = await response.json();
      setResult(result);
    };

    callAPI();
  }, [city, country]);

  const doSearch = search => {
    // Validations
    if (search.city === "" || search.country === "") {
      setError(true);
      return;
    }

    setError(false);
    setCity(search.city);
    setCountry(search.country);
  };

  let component = error ? (
    <Error message="You need to complete both fields" />
  ) : result.cod === "404" ? (
    <Error message={result.message} />
  ) : (
    <Weather weather={result} />
  );

  return (
    <div className="App">
      <Header title="Weather App"></Header>

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form doSearch={doSearch}></Form>
            </div>

            <div className="col s12 m6">{component}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
