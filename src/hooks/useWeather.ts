import { useState, useEffect } from 'react';
import { fetchWeather } from '../api/api';

const useWeather = (location: any) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeather(location);
      setWeather(data);
    };
    getWeather();
  }, [location]);

  return weather;
};

export default useWeather;
