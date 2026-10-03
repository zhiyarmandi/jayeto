import React, { useContext } from "react";
import CityDropdown from "./CityDropdown";
import PriceDropdown from "./PriceDropdown";
import PropertyDropdown from "./PropertyDropdown";
import { Search as SearchIcon } from "lucide-react";
import { HouseContext } from "./HouseContext";


function Search() {

  const {handleClick} = useContext(HouseContext)


  return (
    <div className="text-gray-100 px-7.5 py-5 max-w-292.5 mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3  lg:--top-4 lg:shadow-1 backdrop-blur-[2px] lg:bg-transparent lg:backdrop-blur rounded-xl">
      <CityDropdown />
      <PropertyDropdown />
      <PriceDropdown />

      <button  onClick={()=>handleClick()}
        className="bg-red-500 hover:bg-red-600 transition w-full *
        lg:max-w-40.5 h-16 rounded-lg flex justify-center items-center text-lg

        "
      >
        <SearchIcon/>
      </button>
    </div>
  );
}

export default Search;
