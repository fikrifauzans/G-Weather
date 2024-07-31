import React from "react";

interface WeatherDetailProps {
  icon: string;
  label: string;
  value: string;
}

const WeatherDetail: React.FC<WeatherDetailProps> = ({
  icon,
  label,
  value,
}) => {
  return (
    <div className="mb-4 flex items-center">
      <div className="mr-3">
        <img src={icon} alt={label} className="w-10 h-auto" />
      </div>
      <div className="w-full flex justify-between font-medium">
        <p className="text-lg">
          {label}
        </p>
        <p>

          {value}
        </p>
      </div>
    </div>
  );
};

export default WeatherDetail;
