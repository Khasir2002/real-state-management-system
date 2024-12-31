import React ,{useState, useContext} from 'react';
import {RiMapPinLine,RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import {HouseContext} from './HouseContext';

const CountryDropdown = () => {
  const {country, setCountry, countries, setCountries} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
   <Menu as='div' className='dropdown relative'>
    <Menu.Button className='dropdown-button w-full text-left' onClick={() => setIsOpen(!isOpen)}>
      <RiMapPinLine className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] font-medium leading-tight'>{country}</div>
        <div className='text-[13px] font-medium'>Select your place</div>
      </div>
      {isOpen ? (<RiArrowUpSLine className='dropdown-icon-secondary' />
      ): (
      <RiArrowDownSLine className='dropdown-icon-secondary' />
    )}
    </Menu.Button>

    <Menu.Items className='dropdown-menu'>
      {countries.map((country, index) => {
        return (
          <Menu.Item 
          onClick={() => setCountry(country)}
          className='cursor-pointer hover:text-blue-700 transition'
          as ='li'
          key={index}
          >
          {country}
          </Menu.Item>
        );
      })}
    </Menu.Items>
  </Menu>
  );
};

export default CountryDropdown;
