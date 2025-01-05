import React, { useState, useContext } from 'react';
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Dropdown } from 'react-bootstrap';
import { HouseContext } from './HouseContext';

const PropertyDropdown = () => {
  // Get property info and setter from context
  const { property, setProperty, properties } = useContext(HouseContext);
  // Check if dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown
      className="dropdown"
      onToggle={() => setIsOpen(!isOpen)}
    >
      <Dropdown.Toggle
  className="w-100 text-start d-flex align-items-center justify-content-between"
  id="dropdown-basic"
  style={{
    backgroundColor: 'transparent',
    border: '1px solid #E5E5E5',
    borderRadius: '8px',
    padding: '10px 12px',
  }}
>
  <div className="d-flex align-items-center flex-grow-1">
    <RiHome5Line className="me-4" style={{ color: 'blue', fontSize: '20px' }} />
    <div>
      <div className="fs-6 fw-medium" style={{ color: 'black' }}>
        {property || 'Property (any)'}
      </div>
      <div className="fs-7 text-muted">Select your type</div>
    </div>
  </div>
  <div className="d-flex align-items-center justify-content-end">
    {isOpen ? (
      <RiArrowUpSLine style={{ color: 'blue', fontSize: '20px' }} />
    ) : (
      <RiArrowDownSLine style={{ color: 'blue', fontSize: '20px' }} />
    )}
  </div>
</Dropdown.Toggle>


      <Dropdown.Menu className="w-100">
        {properties.map((property, index) => (
          <Dropdown.Item
            as="li"
            key={index}
            onClick={() => setProperty(property)} // Set the selected property
            className="cursor-pointer hover-link"
            style={{ padding: '8px 12px' }}
          >
            {property}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default PropertyDropdown;
