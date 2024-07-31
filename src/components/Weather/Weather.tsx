import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../redux/slices/weatherSlice';
import { RootState } from '../../redux/store';

interface WeatherProps {
  location: string;
}

const Weather: React.FC<WeatherProps> = ({ location }) => {
  const dispatch = useDispatch();
  const weather = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    dispatch(getWeather(location));
    
  }, [location, dispatch]);

  return (
    <div className="flex flex-col items-center -4">
      {weather.loading && <p>Loading...</p>}
      {weather.error && <p>Error: {weather.error}</p>}
      {weather.data && (
        <div className="text-center">
          <h1 className="text-2xl font-bold">{weather.data.name}</h1>
          <p className="text-lg">{weather.data.main.temp}°C</p>
          <p className="text-sm">{weather.data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
