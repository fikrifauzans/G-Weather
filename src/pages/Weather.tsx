import React, { useEffect, useState } from "react";
import WeatherCard from "../components/Weather/WeatherCard";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getWeather } from "../redux/slices/weatherSlice";
import { formatDate } from "../helper/date";
import { findImageObject } from "../helper/weather";
import { imageCodes, weatherBg } from "../utils/weather";

const WeatherGrid: React.FC = () => {
  const location = useLocation();
  const { country } = location.state || {};
  const weather = useSelector((state: RootState) => state.weather);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [cityValue, setCityValue] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getWeather(country.label));
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);

  const handleUpdateCityValue = async (val: any) => {
    setCityValue(val);
    await dispatch(getWeather(val.label));
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="w-full m-4 flex flex-col lg:flex-row">
          <div className="w-full">
            <WeatherCard
              country={country.country}
              cities={country.cities}
              city={weather?.data?.location?.name ?? ""}
              date={formatDate(weather?.data?.location?.localtime)}
              temp={weather?.data?.current?.temp_c}
              condition={weather?.data?.current?.condition?.text}
              conditionCode={weather?.data?.current?.condition?.code}
              background={findImageObject(
                weather?.data?.location?.localtime,
                weather?.data?.current?.condition?.code,
                weatherBg
              )}
              weatherIcon={findImageObject(
                weather?.data?.location?.localtime,
                weather?.data?.current?.condition?.code,
                imageCodes
              )}
              uv={weather?.data?.current?.uv}
              cloud={weather?.data?.current?.cloud}
              wind_mph={weather?.data?.current?.wind_mph}
              humidity={weather?.data?.current?.humidity}
              heatIndex={weather?.data?.current?.heatindex_c}
              forecastday={weather?.data?.forecast?.forecastday}
              cityValue={cityValue}
              handleUpdateCityValue={handleUpdateCityValue}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherGrid;
