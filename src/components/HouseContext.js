import React, { useState, useEffect, createContext } from "react";

import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    const uniqueProperties = ['type (any)', ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    // check if the default value is ((any))
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };

    // get first value of price and parse it to integer
    const minPrice = parseInt(price.split(' ')[0]);
    console.log(minPrice);

    // get second value of price and parse it to integer
    const maxPrice = parseInt(price.split(' ')[2]);
    console.log(maxPrice);

    // filter houses based on price
    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // if all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      // if all values are default
      if (
        isDefault(country) &&
        isDefault(property) &&
        isDefault(price)
      ) {
        return house;
      }

      // if only country is selected
      if (!isDefault(country) &&
        isDefault(property) &&
        isDefault(price)) {
        return house.country === country;
        }

      // if only property is selected
      if (isDefault(country) &&
        !isDefault(property) &&
        isDefault(price)) {
        return house.type === property;
      }

      // if only price is selected

      if (!isDefault(price) &&
        isDefault(property) &&
        isDefault(country)) {
          if(housePrice >= minPrice && housePrice <= maxPrice) {
            return house;
          }
      }

      // if country and property is not default
      if (!isDefault(country) &&
        !isDefault(property) &&
        isDefault(price)) {
          return house.country === country && house.type === property;
        }

      // if country and price is not default
      if (!isDefault(country) &&
        isDefault(property) &&
        !isDefault(price)) {
          if(housePrice >= minPrice && housePrice <= maxPrice) {
            return house.country === country;
          }
        }

      // if property and price is not default
      if (isDefault(country) &&
        !isDefault(property) &&
        !isDefault(price)) {
          if(housePrice >= minPrice && housePrice <= maxPrice) {
            return house.type === property;
          }
        }
    });

    console.log(newHouses);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        setCountries,
        property,
        setProperty,
        properties,
        setProperties,
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
