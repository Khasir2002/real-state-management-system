import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea, BiCalendar } from "react-icons/bi";
import { FaDog, FaTools, FaMoneyBillWave } from "react-icons/fa";
import { MdSchool, MdRestaurant, MdDirectionsBus } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import Footer from "../components/Footer";
import propertiesJson from "../properties.json";


const PropertyDetails = ({ onSavePlace, onSendMessage }) => {
  const { id } = useParams();
  const house = propertiesJson.properties.find(
    (property) => property.id === parseInt(id)
  );
  const apiKey = "AIzaSyC6OmcwJ5m-feSPpK3YVlFVd9vA954HAWk";

  const [currentImage, setCurrentImage] = useState(house.images[0]);
  const [notification, setNotification] = useState(false);
  const [message, setMessage] = useState("");

  const handleSavePlace = () => {
    const savedPlaces = JSON.parse(localStorage.getItem("savedPlaces")) || [];
    const isAlreadySaved = savedPlaces.some((place) => place.id === house.id);

    if (!isAlreadySaved) {
      savedPlaces.push(house);
      localStorage.setItem("savedPlaces", JSON.stringify(savedPlaces));
      onSavePlace(savedPlaces.length);
      setNotification(true);

      setTimeout(() => {
        setNotification(false);
      }, 3000);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    onSendMessage({
      agent: house.agent.name,
      message,
    });

    setMessage("");
  };

  const formattedDate = `${house.added.day} ${house.added.month}, ${house.added.year}`;

  return (
    <>
      <section className="container my-5">
        <div className="row">
          {notification && (
            <div
              className="alert alert-success"
              style={{
                position: "fixed",
                bottom: "10px",
                right: "10px",
                zIndex: 9999,
                width: "auto",
              }}
            >
              Place has been saved to your profile!
            </div>
          )}

          <div className="col-lg-8">
            <div className="d-flex">
              <div className="w-75">
                <img
                  src={currentImage}
                  alt="Main Property"
                  className="img-fluid rounded"
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="w-25 ms-3">
                {house.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`img-thumbnail rounded mb-2 ${
                      currentImage === img ? "border border-primary" : ""
                    }`}
                    style={{
                      height: "80px",
                      width: "100%",
                      cursor: "pointer",
                      objectFit: "cover",
                    }}
                    onClick={() => setCurrentImage(img)}
                  />
                ))}
              </div>
            </div>
            <h2 className="mt-3">{house.type}</h2>
            <p className="text-muted">{house.address}</p>
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="badge bg-primary">
                ${house.price.toLocaleString()}
              </span>
              <span className="badge bg-secondary">{house.tenure}</span>
              <button
                className="btn btn-outline-primary ms-auto d-flex align-items-center gap-2"
                onClick={() => handleSavePlace(house)}
              >
                <AiOutlineHeart /> Save the Place
              </button>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3 text-muted">
              <BiCalendar className="fs-5" />
              <span>Added on: {formattedDate}</span>
            </div>
            <p>{house.description}</p>

            <div className="d-flex flex-column align-items-start mt-4 p-3 bg-light rounded">
              <div className="d-flex align-items-center gap-3">
                <img
                  src={house.agent.image}
                  alt={house.agent.name}
                  className="rounded-circle"
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
                <div>
                  <h6 className="mb-0">{house.agent.name}</h6>
                  <p className="mb-0 text-muted">{house.agent.phone}</p>
                </div>
              </div>
              <form className="mt-3 w-100" onSubmit={handleSendMessage}>
                <textarea
                  className="form-control mb-2"
                  rows="3"
                  placeholder="Write your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="col-lg-4"
            style={{
              backgroundColor: "#fcf6f2",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            {/* General Info */}
            <div
              className="p-3 mb-3"
              style={{ backgroundColor: "#fff", borderRadius: "8px" }}
            >
              <h5 className="mb-2">General</h5>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li className="d-flex align-items-center gap-2">
                  <FaTools className="fs-5 text-primary" />
                  <div>
                    <p className="mb-0 fw-bold">Utilities</p>
                    <p className="mb-0 text-muted">{house.general.utilities}</p>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <FaDog className="fs-5 text-primary" />
                  <div>
                    <p className="mb-0 fw-bold">Pet Policy</p>
                    <p className="mb-0 text-muted">{house.general.petPolicy}</p>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <FaMoneyBillWave className="fs-5 text-primary" />
                  <div>
                    <p className="mb-0 fw-bold">Property Fees</p>
                    <p className="mb-0 text-muted">
                      {house.general.propertyFees}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Room Sizes */}
            <div
              className="p-3 mb-3"
              style={{ backgroundColor: "#fff", borderRadius: "8px" }}
            >
              <h5 className="mb-2">Room Sizes</h5>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li className="d-flex align-items-center gap-2">
                  <BiArea className="fs-5 text-primary" />
                  <div>
                    <p className="mb-0 fw-bold">Surface Area</p>
                    <p className="mb-0 text-muted">{house.surface}</p>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <BiBed className="fs-5 text-primary" />
                  <div>
                    <p className="mb-0 fw-bold">Bedrooms</p>
                    <p className="mb-0 text-muted">{house.bedrooms} Beds</p>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <BiBath className="fs-5 text-primary" />
                  <div>
                    <p className="mb-0 fw-bold">Bathrooms</p>
                    <p className="mb-0 text-muted">
                      {house.bathrooms} Bathrooms
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Nearby Places */}
            <div
              className="p-3 mb-3"
              style={{ backgroundColor: "#fff", borderRadius: "8px" }}
            >
              <h5 className="mb-2">Nearby Places</h5>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li className="d-flex align-items-center gap-2">
                  <MdSchool className="fs-5 text-primary" />
                  <div>
                    <p className="mb-0 fw-bold">School</p>
                    <p className="mb-0 text-muted">
                      {house.nearbyPlaces.school}
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <MdDirectionsBus className="fs-5 text-primary" />
                  <div>
                    <p className="mb-0 fw-bold">Bus Stop</p>
                    <p className="mb-0 text-muted">
                      {house.nearbyPlaces.busStop}
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <MdRestaurant className="fs-5 text-primary" />
                  <div>
                    <p className="mb-0 fw-bold">Restaurant</p>
                    <p className="mb-0 text-muted">
                      {house.nearbyPlaces.restaurant}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Location Map */}
            {/* Location Map */}
<div
  className="p-3"
  style={{ backgroundColor: "#fff", borderRadius: "8px" }}
>
  <h5 className="mb-2">Location</h5>
  <iframe
    title="Property Location Map"
    src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${house.geoLocation.latitude},${house.geoLocation.longitude}`}
    width="100%"
    height="300"
    style={{ border: "none" }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PropertyDetails;
