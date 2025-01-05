import React, { useState, useContext } from "react";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Dropdown } from "react-bootstrap";
import { HouseContext } from "./HouseContext";

const DistrictDropdown = () => {
  const { district, setDistrict, districts } = useContext(HouseContext);
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
          <RiMapPinLine className="me-4" style={{ color: "blue", fontSize: "20px" }} />
          <div>
            <div className="fs-6 fw-medium" style={{ color: "black" }}>
              {district?.name || "District (any)"}
            </div>
            <div className="fs-7 text-muted">Select your place</div>
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
        {districts.map(({ name, postalCode }) => (
          <Dropdown.Item
            as="li"
            key={postalCode}
            onClick={() => setDistrict({ name, postalCode })}
            className="cursor-pointer hover-link"
            style={{ padding: "8px 12px" }}
          >
            {name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DistrictDropdown;
