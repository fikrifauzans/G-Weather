import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectInput from "../components/common/form/SelectInput";
import { getCountries } from "../redux/slices/regionSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { generateMeteors } from "../helper/animation";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const region = useSelector((state: RootState) => state.region);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [country, setCountry] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const handleSelectChange = (
    selectedOption: { label: string; value: string } | null
  ) => {
    setCountry(selectedOption);
  };

  const handleNextClick = () => {

    if (country) {
      navigate("/weather", { state: { country: country } });
    }
  };



  return (
    <>
      <div className="relative px-8 min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white overflow-hidden">
        {generateMeteors(20)}
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold">
            Find weather forecast with{" "}
            <span className="text-blue-500">G-Weather</span>
          </h1>
          <p className="text-lg mt-4">
            Search for the country you want to find
          </p>
        </div>

        <div className="w-full max-w-md mb-2">
          <SelectInput
            value={country}
            onChange={handleSelectChange}
            options={region.data}
            placeholder="Country"
          />
        </div>
        <div className="w-full flex mb-6 justify-center mt-4">
          <button
            onClick={handleNextClick}
            disabled={!country}
            className={`px-6 py-2 bg-blue-500 text-white text-sm rounded-xl  font-bold ${
              !country ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            See Forecast
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
