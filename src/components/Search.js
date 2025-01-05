import React, { useContext } from 'react';
import CountryDropdown from './DistrictDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import { HouseContext } from './HouseContext';
import { RiSearch2Line } from 'react-icons/ri';
import BedroomsDropdown from './BedroomsDropdown';

const Search = () => {
  const { handleClick } = useContext(HouseContext);

  return (
    <div
      className="px-5 py-4 mx-auto d-flex flex-column flex-lg-row justify-content-between gap-3 shadow-lg bg-white rounded"
      style={{ maxWidth: '1210px', position: 'relative', top: '4px' }}
    >
      <CountryDropdown />
      <PropertyDropdown />
      <BedroomsDropdown />
      <PriceRangeDropdown />

      <button
        onClick={() => handleClick()}
        className="btn btn-primary d-flex justify-content-center align-items-center w-100 w-lg-auto"
        style={{ maxWidth: '294px', height: '64px' }}
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
