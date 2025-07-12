import { useState, useEffect } from 'react'
import './App.css'
import AddPerimeters from './components/AddPerimeters';
import Weather from './components/Weather';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
 


  function handleChange(e){
    setCity(e.target.value);
  }

  function handleSearch(e){
    e.preventDefault();
    console.log('Searching data for:', city)
     const apiKey = '837e448dbf7aa9520d41356bf332cdd8';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;  

      fetch(apiUrl)
      .then(response=> response.json())
      .then(data => {
        setWeather(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
   }

   



  return (

    <div className='w-screen h-screen bg-gray-700 flex justify-center p-6'>
      <div className='w-[500px] space-y-4'>
        <h1 className='text text-3xl text-center text-slate-100 font-mono'>Weather App</h1>
        <AddPerimeters city={city} handleChange={handleChange}  handleSearch={handleSearch}/>
        <Weather weatherData={weather} />
      </div>
    </div>
  );

}

export default App
