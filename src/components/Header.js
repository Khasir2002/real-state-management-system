import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
import profilePic from '../assets/img/agent8.png';

const Header = ({ savedCount }) => {
  return (
    <header className="py-3 mb-4 border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={Logo} alt="logo" style={{ maxHeight: '40px' }} />
        </Link>

        <div className="d-flex align-items-center gap-4">
          <img
            src={profilePic}
            alt="User"
            className="rounded-circle"
            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
          />

          <div className="position-relative">
            <Link
              to="/profile"
              className="btn btn-primary"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: '600',
                padding: '5px 12px',
                borderRadius: '6px',
              }}
            >
              Profile
            </Link>
            {savedCount > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{
                  fontSize: '0.8rem',
                  padding: '4px 6px',
                  marginLeft: '-10px',
                }}
              >
                {savedCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
