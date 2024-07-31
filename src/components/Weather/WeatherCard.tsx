import React, { useState } from "react";
import WeatherDetail from "./WeatherDetail";
import { getTime } from "../../helper/date";
import { findImageObject } from "../../helper/weather";
import { imageCodes } from "../../utils/weather";
import SelectInput from "../common/form/SelectInput";
import { useNavigate } from "react-router-dom";

interface WeatherCardProps {
  country: string;
  city: string;
  date: string;
  temp: string;
  condition: string;
  conditionCode: number;
  background: any;
  weatherIcon: any;
  uv: number;
  cloud: number;
  wind_mph: number;
  humidity: number;
  heatIndex: number;
  forecastday: any;
  cities: Array<any>;
  cityValue: any;
  handleUpdateCityValue: any;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  uv,
  cloud,
  weatherIcon,
  wind_mph,
  humidity,
  country,
  city,
  date,
  temp,
  condition,
  conditionCode,
  background,
  heatIndex,
  forecastday,
  cities,
  cityValue,
  handleUpdateCityValue,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const currentData = forecastday?.[0]?.hour
    ? forecastday[0].hour.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      )
    : [];

  const totalPages = forecastday?.[0]?.hour
    ? Math.ceil(forecastday[0].hour.length / itemsPerPage)
    : 0;

  const navigate = useNavigate()

  return (
    <div className="lg:min-h-fit xl:min-h-fit sm:min-h-screen xl:max-w-7xl lg:max-w-7xl bg-gray-950 text-white rounded-lg p-6 shadow-lg mx-auto weather-card">
      {}
        <div className="text-4xl font-bold">
          <span className="text-white-500 cursor-pointer" onClick={() => navigate('/')}>G-Weather</span>
        </div>
      <div className="mt-4 flex flex-col lg:flex-row items-start justify-between">
        <div className="w-full lg:w-6/12 relative mb-4 lg:mb-0">
          <div className="mb-4">
            <SelectInput
              value={cityValue}
              onChange={handleUpdateCityValue}
              options={cities.map((val) => {
                return { label: val, value: val };
              })}
              placeholder="Select City"
            />
          </div>
          <div className="w-full flex justify-between absolute p-4">
            <div>
              <h2 className="text-lg lg:text-xl font-semibold">{country}</h2>
              <p className="text-xs lg:text-sm text-gray-400">
                {city}, {date}
              </p>
            </div>
            <p className="text-lg lg:text-xl">
              {new Date().toLocaleTimeString()}
            </p>
          </div>
          <div className="absolute right-0 bottom-0 w-full flex justify-end">
            <img
              alt="Weather"
              src={`/assets/weather/icons/${weatherIcon?.image}`}
              className="w-1/3 lg:w-1/2"
            />
          </div>
          <img
            src={`/assets/weather/background/${background?.image}`}
            alt="Weather Icon"
            className="w-full h-auto rounded-md fade-in"
          />
          <div className="absolute bottom-10">
            <div className="ml-4">
              <p className="text-6xl lg:text-8xl font-bold">
                {Math.round(parseInt(temp))}°C
              </p>
              <p>{condition}</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12 xs:mx-0 sm:mx-0 lg:mx-3 flex flex-col items-start">
          <div className="bg-gray-900 w-full px-4 lg:px-6 rounded-md slide-in">
            <div className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-8 mt-2 lg:mt-4">
              <p>Detail Weather</p>
            </div>

            <WeatherDetail
              icon="/assets/weather/icons/detail/temp.png"
              label="Heat Index"
              value={`${heatIndex} C`}
            />
            <WeatherDetail
              icon="/assets/weather/icons/detail/cloud.png"
              label="Cloud"
              value={`${cloud} `}
            />
            <WeatherDetail
              icon="/assets/weather/icons/detail/wind.png"
              label="Wind"
              value={`${wind_mph} MPH`}
            />
            <WeatherDetail
              icon="/assets/weather/icons/detail/water.png"
              label="Humidity"
              value={`${humidity} RH`}
            />
            <WeatherDetail
              icon="/assets/weather/icons/detail/sun.png"
              label="UV"
              value={`${uv}`}
            />
          </div>
          <div className="bg-gray-800 w-full p-4 rounded-md mt-3">
            <h3 className="text-xl lg:text-2xl mx-4 mb-4 font-semibold">
              Last 24 Hours
            </h3>
            <div className="flex justify-between mt-2">
              <div className="flex flex-wrap pagination-content">
                {currentData.map((day: any, index: number) => (
                  <div
                    key={index}
                    className="flex flex-col flex-grow basis-1/2 sm:basis-1/3 lg:basis-1/5 max-w-1/2 sm:max-w-1/3 lg:max-w-1/5 text-center fade-in mb-4"
                  >
                    <p className="text-xs lg:text-sm">{getTime(day.time)}</p>
                    <img
                      src={`/assets/weather/icons/${
                        findImageObject(
                          day.time,
                          day.condition.code,
                          imageCodes
                        )?.image
                      }`}
                      alt="Weather Icon"
                      className="w-auto mx-auto"
                    />
                    <div>
                      <p className="text-xs lg:text-sm">
                        {day.condition?.text}
                      </p>
                    </div>
                    <div className="text-center justify-center flex text-xs">
                      <p>{day.temp_c} C</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`mx-1 px-2 lg:px-3 py-1 rounded ${
                    index === currentPage ? "bg-blue-500" : "bg-gray-500"
                  } transition-all duration-300 ease-in-out`}
                  onClick={() => handlePageChange(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
