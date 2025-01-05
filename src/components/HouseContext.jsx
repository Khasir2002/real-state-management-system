import React, { useState, useEffect, createContext } from "react";
import propertiesData from "../properties.json";

// Create a context to share house info
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  // Set up states to store data and filters
  const [houses, setHouses] = useState(propertiesData.properties);
  const [district, setDistrict] = useState({ name: "District (any)", postalCode: "" });
  const [bedrooms, setBedrooms] = useState("Bedrooms (any)");
  const [districts, setDistricts] = useState([]);
  const [bedroomOptions, setBedroomOptions] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  // Get all unique districts from the data
  useEffect(() => {
    const uniqueDistricts = [];
    propertiesData.properties.forEach((house) => {
      // Avoid duplicates in district list
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
    setDistricts([{ name: "District (any)", postalCode: "" }, ...uniqueDistricts]); // Add "any" option at the start
  }, []);

  useEffect(() => {
    const allBedrooms = propertiesData.properties.map((house) => house.bedrooms);
    const uniqueBedrooms = ["Bedrooms (any)", ...new Set(allBedrooms)]; 
    setBedroomOptions(uniqueBedrooms); // Set the list of bedroom options
  }, []);

  useEffect(() => {
    const allProperties = propertiesData.properties.map((house) => house.type);
    const uniqueProperties = ["Property type (any)", ...new Set(allProperties)];
    setProperties(uniqueProperties); // Set the list of property types
  }, []);


  // Handle the filtering when the user clicks "Search"
  const handleClick = () => {
    setLoading(true);
  
    // Check if a filter is set to "any"
    const isDefault = (value) =>
      !value || value === "District (any)" || value === "Bedrooms (any)" || value === "Property type (any)" || value === "Price range (any)";
  
    // Get the min and max price from the selected range
    const [minPrice, maxPrice] = price === "Price range (any)" ? [0, Infinity] : price.split(" - ").map((p) => parseInt(p));
  
    // Filter the houses based on selected filters
    const filteredHouses = propertiesData.properties.filter((house) => {
      const housePrice = house.price;
  
      return (
        (isDefault(district.name) || house.district.name === district.name) && 
        (isDefault(property) || house.type === property) &&
        (isDefault(bedrooms) || house.bedrooms === parseInt(bedrooms)) &&
        (isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice))
      );
    });
  
    // If all filters are "any," show all houses
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
