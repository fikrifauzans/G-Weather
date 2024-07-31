import React, { useEffect, useState } from "react";

import SelectInput from "../components/common/form/SelectInput";
import { getCountries } from "../redux/slices/regionSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
const Home: React.FC = () => {
  //   const [location, setLocation] = useState('');
  const dispatch = useDispatch();
  const region = useSelector((state: RootState) => state.region);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [county, setCountry] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const handleSelectChange = (
    selectedOption: { label: string; value: string } | null
  ) => {
    setCountry(selectedOption);
  };

  return (
    <div className="px-8 min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          find weather forecast with{" "}
          <span className="text-blue-500">G-Weather</span>
        </h1>
        <p className="text-lg mt-4">search for the country you want to find</p>
      </div>
      <div className="w-full max-w-md mb-2">
        <SelectInput
          value={county}
          onChange={handleSelectChange}
          options={region.data}
          placeholder="Country"
        />
      </div>
      {/* <Weather location={location} /> */}
    </div>
  );
};

export default Home;
