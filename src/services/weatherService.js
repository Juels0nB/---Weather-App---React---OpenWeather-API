export const fetchWeatherByCity = async (city) => {
  const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(endpoint);
  if (!res.ok) throw new Error("City not found");
  return res.json();
};