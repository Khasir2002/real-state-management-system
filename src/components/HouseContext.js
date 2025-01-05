import React, { useState, useEffect, createContext } from "react";
import propertiesData from "../properties.json";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(propertiesData.properties);
  const [district, setDistrict] = useState({ name: "District (any)", postalCode: "" });
  const [bedrooms, setBedrooms] = useState("Bedrooms (any)");
  const [districts, setDistricts] = useState([]);
  const [bedroomOptions, setBedroomOptions] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const uniqueDistricts = [];
    propertiesData.properties.forEach((house) => {
      if (
        !uniqueDistricts.some(
          (district) =>
            district.name === house.district.name &&
            district.postalCode === house.district.postalCode
        )
      ) {
        uniqueDistricts.push(house.district);
      }
    });
    setDistricts([{ name: "District (any)", postalCode: "" }, ...uniqueDistricts]);
  }, []);

  useEffect(() => {
    const allBedrooms = propertiesData.properties.map((house) => house.bedrooms);
    const uniqueBedrooms = ["Bedrooms (any)", ...new Set(allBedrooms)];
    setBedroomOptions(uniqueBedrooms);
  }, []);

  useEffect(() => {
    const allProperties = propertiesData.properties.map((house) => house.type);
    const uniqueProperties = ["Property type (any)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);
  
    const isDefault = (value) =>
      !value || value === "District (any)" || value === "Bedrooms (any)" || value === "Property type (any)" || value === "Price range (any)";
  
    const [minPrice, maxPrice] = price === "Price range (any)" ? [0, Infinity] : price.split(" - ").map((p) => parseInt(p));
  
    const filteredHouses = propertiesData.properties.filter((house) => {
      const housePrice = house.price;
  
      return (
        (isDefault(district.name) || house.district.name === district.name) && 
        (isDefault(property) || house.type === property) &&
        (isDefault(bedrooms) || house.bedrooms === parseInt(bedrooms)) &&
        (isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice))
      );
    });
  
    if (
      isDefault(district.name) &&
      isDefault(property) &&
      isDefault(bedrooms) &&
      isDefault(price)
    ) {
      setHouses(propertiesData.properties);
    } else {
      setHouses(filteredHouses);
    }
  
    setLoading(false);
  };
  
  

  return (
    <HouseContext.Provider
      value={{
        district,
        setDistrict,
        districts,
        bedrooms,
        setBedrooms,
        bedroomOptions,
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
