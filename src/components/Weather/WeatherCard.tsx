import React from "react";
import WeatherDetail from "./WeatherDetail";

interface WeatherCardProps {
  title: string;
  temperature: string;
  weatherIcon: string;
  weatherDescription: string;
  details: {
    label: string;
    value: string;
  }[];
  forecast: {
    day: string;
    weatherIcon: string;
    highTemp: string;
    lowTemp: string;
    description: string;
  }[];
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  title,
  temperature,
  weatherIcon,
  weatherDescription,
  details,
  forecast,
}) => {
  return (
    <div className="lg:min-h-fit xl:min-h-fit sm:min-h-screen  xl:max-w-7xl lg:max-w-7xl  bg-gray-950 text-white rounded-lg p-6 shadow-lg   mx-auto">
      <div className="mt-4  flex flex-row items-start justify-between">
        <div className=" w-6/12 relative ">
          <div className="w-full flex justify-between absolute p-4">
            <div>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-sm text-gray-400">
                Segunda-feira, 15 de maio de 2023
              </p>
            </div>
            <p className="text-xl">{new Date().toLocaleTimeString()}</p>
          </div>
          <div className="absolute right-0 bottom-0 w-full flex justify-end">
            <img
              alt="Weather"
              src={"/assets/weather/icons/Weather=Clear, Moment=Day.svg"}
              className="w-1/2"
            />
          </div>
          <img
            src={"/assets/weather/background/Weather=Snow, Moment=Day.png"}
            alt="Weather Icon"
            className="w-full  h-auto rounded-md"
          />

          <div className="absolute bottom-10">
            <div className="ml-4">
              <p className="text-8xl font-bold">{temperature}</p>
              <p>{weatherDescription}</p>
            </div>
          </div>
        </div>
        <div className="w-6/12  mx-3   flex flex-col items-start ">
          <div className="bg-gray-900 w-full  px-6 rounded-md  ">
            <div className="text-4xl font-bold mb-8 mt-4">
              <p>Detail Weather</p>
            </div>

            <WeatherDetail
              icon="/assets/weather/icons/detail/temp.png"
              label="Sensação térmica"
              value="26"
            />
            <WeatherDetail
              icon="/assets/weather/icons/detail/cloud.png"
              label="Sensação térmica"
              value="26"
            />
            <WeatherDetail
              icon="/assets/weather/icons/detail/wind.png"
              label="Sensação térmica"
              value="26"
            />
            <WeatherDetail
              icon="/assets/weather/icons/detail/water.png"
              label="Sensação térmica"
              value="26"
            />
            <WeatherDetail
              icon="/assets/weather/icons/detail/sun.png"
              label="Sensação térmica"
              value="26"
            />
          </div>
          <div className="bg-gray-800 w-full  p-4 rounded-md mt-3">
            <h3 className="text-2xl mx-4 mb-4 font-semibold">Last 5 days</h3>
            <div className="flex justify-between mt-2 ">
              <div className="flex ">
                {forecast.map((day, index) => (
                  <div key={index} className="flex flex-col text-center">
                    <p className="">{day.day}</p>
                    <img
                      src={
                        "/assets/weather/icons/Weather=Clear, Moment=Day.svg"
                      }
                      alt="Weather Icon"
                      className="w-auto"
                    />
                    <div>
                      <p>{day.description}</p>
                    </div>
                    <div className="text-center justify-center flex text-xs">
                      <p>{day.highTemp}</p>
                      <span> - </span>
                      <p>{day.lowTemp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
