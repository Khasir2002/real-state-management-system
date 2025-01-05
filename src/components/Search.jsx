import React, { useContext } from 'react';
import DistrictDropdown from './DistrictDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import { HouseContext } from './HouseContext';
import { RiSearch2Line } from 'react-icons/ri';
import BedroomsDropdown from './BedroomsDropdown';

const Search = () => {
  const { handleClick } = useContext(HouseContext); // Get the search function

  return (
    <div
      className="container-fluid px-3 py-4 d-flex flex-wrap justify-content-center align-items-center gap-3 shadow-lg bg-white rounded"
      style={{ maxWidth: '1210px', position: 'relative', top: '4px' }}
    >
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
        <DistrictDropdown />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <PropertyDropdown />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <BedroomsDropdown />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <PriceRangeDropdown />
      </div>
      </div>

      <div className="col-12 col-lg-2 mt-2 mt-lg-0">
        <button
          onClick={() => handleClick()} // Do the search when clicked
          className="btn btn-primary d-flex justify-content-center align-items-center w-100"
          style={{ height: '48px' }}
        >
          <RiSearch2Line />
          <span className="ms-2">Search</span>
        </button>
      </div>
    </div>
  );
};

export default Search;