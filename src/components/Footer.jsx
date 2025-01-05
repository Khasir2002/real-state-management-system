import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} Real Estate. All Rights Reserved.</p>
        <p className="mb-0">
          <a
            href="/privacy-policy"
            className="text-white text-decoration-none mx-2"
          >
            Privacy Policy
          </a>
          |
          <a
            href="/terms-of-service"
            className="text-white text-decoration-none mx-2"
          >
            Terms of Service
          </a>
          |
          <a
            href="/contact-us"
            className="text-white text-decoration-none mx-2"
          >
            Contact Us
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
