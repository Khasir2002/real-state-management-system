import React from 'react';
import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className="h-100 mb-3 mb-xl-5">
      <div className="container">
        <div className="row">
          <div className="col-lg d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start justify-content-center px-3 px-lg-0">
            {/* Updated styling for the header */}
            <h1
              className="display-4 fw-bold mb-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                lineHeight: '1.2',
              }}
            >
              <span
                style={{
                  color: '#007BFF',
                  fontWeight: '700',
                }}
              >
                Find
              </span>{' '}
              Your Dream House With Us...
            </h1>

            {/* Updated styling for the paragraph */}
            <p
              className="lead mb-4"
              style={{
                fontFamily: "'Poppins', sans-serif", // Ensure this font is loaded
                fontSize: '1.125rem',
                color: '#4A4A4A', // Subtle gray tone
              }}
            >
              Search for the best property that suits your needs.
              <br />
              We have a wide range of properties for you to choose from.
            </p>
          </div>
          <div className="col-lg d-none d-lg-flex justify-content-end align-items-end">
            <img src={Image} alt="house banner" className="img-fluid" />
          </div>
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
