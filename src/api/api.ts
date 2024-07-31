import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY as string;

const createCustomAxios = (baseURL: string) => {
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
  });

  instance.interceptors.response.use(
    response => response,
    error => {
      console.error('API call failed', error);
      return Promise.reject(error);
    }
  );

  return instance;
};

export const fetchWeather = async (location: string) => {
  const weatherAxios = createCustomAxios('https://api.openweathermap.org/data/2.5');
  try {
    const response = await weatherAxios.get(`/weather?q=${location}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.error('Fetching weather data failed', error);
    throw error;
  }
};

export const fetchRegionData = async (path: string) => {
  const regionAxios = createCustomAxios(process.env.REACT_APP_BASE_REGION_API_URL as string);
  try {
    const response = await regionAxios.get(path);
    return response.data;
  } catch (error) {
    console.error('Fetching region data failed', error);
    throw error;
  }
};
