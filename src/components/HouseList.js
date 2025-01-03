import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';
import House from './House';
import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  // If loading is true
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
        <ImSpinner2 className="text-primary spinner-border" style={{ fontSize: '2rem' }} />
      </div>
    );
  }

  if (houses.length < 1) {
    return (
      <h2 className="text-center text-secondary mt-5">No properties found.</h2>
    );
  }

  return (
    <section className="mb-5">
      <div className="container">
        <div className="row g-4">
          {houses.map((house, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <Link to={`/property/${house.id}`} className="text-decoration-none">
                <House house={house} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
