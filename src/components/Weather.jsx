function Weather({ weatherData }) {
  if (!weatherData || !weatherData.main || !weatherData.weather) {
    return <div>No weather data available</div>;
  }

  const { temp, humidity } = weatherData.main;
  const description = weatherData.weather[0].description;

  return (
    <div>
      <h2>{weatherData.name}</h2>
      <p>Temperature: {temp} °C</p>
      <p>Humidity: {humidity}%</p>
      <p>Condition: {description}</p>
    </div>
  );
}

export default Weather;