
import { createContext, useEffect, useState } from "react";
import { housesData } from "../pages/data";

export const HouseContext = createContext();

const ALL_CITIES = "مقاصد(همه)";
const ALL_PROPERTIES = "خانه‌ها(همه)";
const ALL_PRICES = "قیمت‌ها(همه)";

const isDefault = (str) => str.includes("(همه)");

function HouseContextProvider({ children }) {
  const [houses, setHouses] = useState(housesData);
  const [city, setCity] = useState(ALL_CITIES);
  const [Cities, setCities] = useState([]);
  const [property, setProperty] = useState(ALL_PROPERTIES);
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState(ALL_PRICES);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCities = housesData.map((house) => house.city);
    setCities([ALL_CITIES, ...new Set(allCities)]);
  }, []);

  useEffect(() => {
    const allProperties = housesData.map((house) => house.type);
    setProperties([ALL_PROPERTIES, ...new Set(allProperties)]);
  }, []);

  function handleClick() {
    setLoading(true);


    let minPrice = 0;
    let maxPrice = Infinity;
    if (!isDefault(price)) {
      const nums = price.match(/\d+/g);
      if (nums && nums.length >= 2) {
        minPrice = parseInt(nums[0]);
        maxPrice = parseInt(nums[1]);
      }
    }

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      const cityMatch = isDefault(city) || house.city === city;
      const propertyMatch = isDefault(property) || house.type === property;
      const priceMatch = housePrice >= minPrice && housePrice <= maxPrice;

      return cityMatch && propertyMatch && priceMatch;
    });

    setTimeout(() => {
      setHouses(newHouses);
      setLoading(false);
    }, 1000);
  }

  return (
    <HouseContext.Provider
      value={{
        handleClick,
        houses,
        setHouses,
        city,
        setCity,
        Cities,
        setCities,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        loading,
        setLoading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
}

export default HouseContextProvider;