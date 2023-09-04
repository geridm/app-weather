import { useState } from "react";

const WeatherCard = ({ weather, temp }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleChangeTemp = () => setIsCelsius(!isCelsius);

  return (
    <article className="principal-container">
      <h1 className="container__title">Weather App</h1>
      <h2 className="container__subtitle">
        {weather?.name}, {weather?.sys.country}
      </h2>
      <div className="main">
        <div className="container__image">
          <img
            className="container__image__icon"
            src={
              weather &&
              `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
            }
            alt=""
          />
        </div>
        <section className="weather">
          <div className="main__segundo">
            <h3 className="weather__description">
              "{weather?.weather[0].description}"
            </h3>
            <ul className="weather__principal-list">
              <li className="weather__principal-item">
                <span className="weather__principal-label">Wind Speed</span>
                <span className="weather__principal-label-value">
                  {weather?.wind.speed} m/s
                </span>
              </li>
              <li className="weather__principal-item">
                <span className="weather__principal-label">Clouds</span>
                <span className="weather__principal-label-value">
                  {weather?.clouds.all} %
                </span>
              </li>
              <li className="weather__principal-item">
                <span className="weather__principal-label">Pressure</span>
                <span className="weather__principal-label-value">
                  {weather?.main.pressure} hPa
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="footer">
        
        <h2 className="weather__temp">
          {isCelsius ? `${temp?.celsius} °C` : `${temp?.farenheit} °F`}
        </h2>
        <button className="weather__btn" onClick={handleChangeTemp}>
          Change to °F
        </button>
      </div>
    </article>
  );
};

export default WeatherCard;
