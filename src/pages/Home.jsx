import React from 'react';


import Header from '../components/Header';
import Banner from '../components/Banner';
import HouseList from '../components/HouseList';

const Home = () => {
  return (
  <div className='min-h-[1800px]'>
      <Header />
      <Banner />
      <HouseList />
  </div>
  );
};

export default Home;
