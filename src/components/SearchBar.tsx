"use client";
import React from "react";
import Image from "next/image";

interface Props {
  handleChange: (key: string, e: string) => void;
}
const SearchBar: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-1 ic justify-between gap-4 bg-gray-100 p-2 rounded-md">
      <input
        type="text"
        name="search-bar-by-name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.handleChange("name", e.target.value);
        }}
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="search icon" width={16} height={16} />
      </button>
    </div>
  );
};

export default SearchBar;
