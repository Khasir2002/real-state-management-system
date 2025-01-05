import React, { useState, useContext } from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Dropdown } from 'react-bootstrap';
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  // Get price info and setter from context
  const { price, setPrice } = useContext(HouseContext);
  // Check if dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    { value: 'Price range (any)' },
    { value: '1000000 - 13000000' },
    { value: '13000000 - 16000000' },
    { value: '16000000 - 19000000' },
    { value: '19000000 - 22000000' },
    { value: '100000 - 300000' },
    { value: '300000 - 400000' },
  ];

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
          <RiWallet3Line className="me-4" style={{ color: 'blue', fontSize: '20px' }} />
          <div>
            <div className="fs-6 fw-medium" style={{ color: 'black' }}>
              {price || 'Price range (any)'}
            </div>
            <div className="fs-7 text-muted">Choose price range</div>
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
        {prices.map((price, index) => (
          <Dropdown.Item
            as="li"
            key={index}
            onClick={() => setPrice(price.value)}
            className="cursor-pointer hover-link"
            style={{ padding: '8px 12px' }}
          >
            {price.value}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default PriceRangeDropdown;
