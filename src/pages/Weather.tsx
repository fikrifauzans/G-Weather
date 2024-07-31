import React from 'react';
import WeatherCard from '../components/Weather/WeatherCard';

const weatherDetails = {
  title: 'Porto Alegre, RS',
  temperature: '28°C',
  weatherIcon: '/path/to/weather-icon.png', // Replace with actual icon path
  weatherDescription: 'Poucas nuvens',
  details: [
    { label: 'Sensação térmica', value: '26°C' },
    { label: 'Probabilidade de chuva', value: '0%' },
    { label: 'Velocidade do vento', value: '8 km/h' },
    { label: 'Umidade do ar', value: '40%' },
    { label: 'Índice UV', value: '5' },
  ],
  forecast: [
    { day: 'Amanhã', weatherIcon: '/path/to/weather-icon.png', highTemp: '32°C', lowTemp: '26°C' ,description: 'cerah' },
    { day: 'Amanhã', weatherIcon: '/path/to/weather-icon.png', highTemp: '32°C', lowTemp: '26°C' ,description: 'cerah' },
    { day: 'Amanhã', weatherIcon: '/path/to/weather-icon.png', highTemp: '32°C', lowTemp: '26°C' ,description: 'cerah' },
    { day: 'Amanhã', weatherIcon: '/path/to/weather-icon.png', highTemp: '32°C', lowTemp: '26°C' ,description: 'cerah' },
    { day: 'Amanhã', weatherIcon: '/path/to/weather-icon.png', highTemp: '32°C', lowTemp: '26°C' ,description: 'cerah' },
  ],
};

const WeatherGrid: React.FC = () => {
  return (
    <div className=" min-h-screen bg-gray-950 flex items-center justify-center">
      <div className=" w-full m-4 flex flex-col lg:flex-row">
        <div className="w-full  ">
          <WeatherCard {...weatherDetails} />
        </div>
       
      </div>
    </div>
  );
};

export default WeatherGrid;
