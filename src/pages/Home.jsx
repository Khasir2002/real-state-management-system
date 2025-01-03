import React from 'react';

import Banner from '../components/Banner';
import HouseList from '../components/HouseList';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div style={{ minHeight: '1800px' }}>
      <Banner />
      <HouseList />
      <Footer />
    </div>
  );
};

export default Home;
