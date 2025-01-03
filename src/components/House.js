import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ house }) => {
  const {
    picture,
    type,
    country,
    address,
    bedrooms,
    bathrooms,
    surface,
    price,
  } = house;


  return (
    <div
      className="bg-white rounded shadow-sm p-4 position-relative mx-auto hover-shadow transition"
      style={{ maxWidth: "352px", cursor: "pointer" }}
    >
      <img className="mb-3 img-fluid rounded" src={picture} alt={house.name} />
      <div className="mb-3 d-flex gap-2 text-muted small">
        <div className="badge bg-success text-white">{type}</div>
        <div className="badge bg-primary text-white">{country}</div>
      </div>
      <div className="fw-semibold text-truncate" style={{ maxWidth: "260px" }}>
        {address}
      </div>
      <div className="d-flex gap-3 my-3">
        <div className="d-flex align-items-center gap-1 text-secondary">
          <div className="fs-5">
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="d-flex align-items-center gap-1 text-secondary">
          <div className="fs-5">
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="d-flex align-items-center gap-1 text-secondary">
          <div className="fs-5">
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="fw-semibold text-primary">Rs.{price}</div>
      </div>
    </div>
  );
};

export default House;
