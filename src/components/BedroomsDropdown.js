import React, { useState, useContext } from "react";
import { RiHome2Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Dropdown } from "react-bootstrap";
import { HouseContext } from "./HouseContext";

const BedroomsDropdown = () => {
  const { bedrooms, setBedrooms, bedroomOptions } = useContext(HouseContext);
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
          backgroundColor: "transparent",
          border: "1px solid #E5E5E5",
          borderRadius: "8px",
          padding: "10px 12px",
        }}
      >
        <div className="d-flex align-items-center flex-grow-1">
          <RiHome2Line className="me-4" style={{ color: "blue", fontSize: "20px" }} />
          <div>
            <div className="fs-6 fw-medium" style={{ color: "black" }}>
              {bedrooms || "Bedrooms (any)"}
            </div>
            <div className="fs-7 text-muted">Select your No.of Bedrooms</div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-end">
          {isOpen ? (
            <RiArrowUpSLine style={{ color: "blue", fontSize: "20px" }} />
          ) : (
            <RiArrowDownSLine style={{ color: "blue", fontSize: "20px" }} />
          )}
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-100">
        {bedroomOptions.map((option, index) => (
          <Dropdown.Item
            as="li"
            key={index}
            onClick={() => setBedrooms(option)}
            className="cursor-pointer hover-link"
            style={{ padding: "8px 12px" }}
          >
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default BedroomsDropdown;
