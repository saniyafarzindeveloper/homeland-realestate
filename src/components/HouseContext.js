import React, { useState, useEffect, createContext } from "react";
import { housesData } from "../data";

//creating context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  //return all countries
  useEffect(() => {
    const allCountries = houses.map((houses) => {
      return houses.country;
    });
    console.log(allCountries);

    //remove duplicate countires
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];

    console.log(uniqueCountries);

    //set country state
    setCountries(uniqueCountries);
  }, []);

  //return all property types
  useEffect(() => {
    const allProperties = houses.map((houses) => {
      return houses.type;
    });
    console.log(allProperties);

    //remove duplicate countires
    const uniqueProperties = ["Property type (any)", ...new Set(allProperties)];

    console.log(uniqueProperties);

    //set property state
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {

    //set loading
    setLoading(true);

    // console.log(country, property, price);

    //create a function that includes (any)
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    // console.log(isDefault(country));

    //get 1st value & parse it to number
    const minPrice = parseInt(price.split(" ")[0]);

    //get 2nd value which is the max & parse it to number
    const maxPrice = parseInt(price.split(" ")[2]);
    // console.log(maxPrice)

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      //if all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      //if all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      //if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      //if property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      //if price is not default
      if (!isDefault(price) && isDefault(property) && isDefault(country)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      //if country & property is NOT default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      //if country & price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      //property & price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

      setTimeout(() =>{
        return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses);
        setLoading(false)
      })

    // console.log(newHouses);
    // return newHouses;
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
