import { useState } from "react";
import "./App.css";
import AddPerimeters from "./components/AddPerimeters";
import Weather from "./components/Weather";
import { fetchWeatherByCity } from "./services/weatherService";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    console.log("Searching data for:", city);

    fetchWeatherByCity(city)
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setWeather(null);
      });
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300 ">
      <div className="w-[500px] space-y-6 bg-white bg-opacity-55 rounded-xl shadow-2xl p-8 backdrop-blur-md">
        <h1 className="text-4xl text-center text-blue-900 font-bold font-mono drop-shadow-lg">
          Weather App
        </h1>
        <AddPerimeters
          city={city}
          handleChange={handleChange}
          handleSearch={handleSearch}
        />

        <Weather weatherData={weather} />
      </div>
    </div>
  );
}

export default App;
