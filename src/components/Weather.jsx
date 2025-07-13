import PropTypes from "prop-types";
function Weather({ weatherData }) {
  if (!weatherData || !weatherData.main || !weatherData.weather) {
    return <div>No weather data available</div>;
  }

  const { temp, humidity } = weatherData.main;
  const description = weatherData.weather[0].description;

  return (
    <div className="bg-gray-200 bg-opacity-80 p-6 rounded-xl text-blue-900 shadow-lg font-mono backdrop-blur">
      <h2 className="text-2xl font-bold mb-2" >{weatherData.name}</h2>
      <p className="text-lg">Temperature: <span className="font-semibold">{temp} °C</span></p>
      <p className="text-lg">Humidity: <span className="font-semibold">{humidity}%</span></p>
      <p className="text-lg">Condition: <span className="capitalize">{description}</span></p>
    </div>
  );
}
Weather.propTypes = {
  weatherData: PropTypes.object.isRequired,
};

export default Weather;