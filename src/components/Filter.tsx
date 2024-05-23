import React from "react";
import SearchBar from "./SearchBar";
import SliderRange from "./SliderRange";
import { Select } from "@mantine/core";
import { FilterProps } from "@/Types";
import { SORT_OPTIONS } from "@/constant";

interface filterProps {
  setFilter: React.Dispatch<React.SetStateAction<FilterProps>>;
}

const Filter: React.FC<filterProps> = (props) => {
  const handleChange = (key: string, value: string | number[]): void => {
    props.setFilter((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="mt-4 md:flex justify-between flex-wrap">
      {/* search by product name */}
      <div className="md:w-[30%] sm:w-full">
        <SearchBar handleChange={handleChange} />
      </div>
      {/* filter by price range */}
      <div className=" md:m-auto  md:w-[30%] sm:w-full my-6">
        <SliderRange handleChange={handleChange} />
      </div>
      {/* sort by price or product name  */}
      <div className="md:w-[30%] sm:w-full ">
        <Select
          placeholder="Sort by"
          data={SORT_OPTIONS}
          onChange={(_value, options) => {
            handleChange("sort", options.value);
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
