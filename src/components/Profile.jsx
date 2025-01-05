import React, { useEffect, useState } from "react";

const Profile = ({ onDeletePlace }) => {
  const [savedPlaces, setSavedPlaces] = useState([]);
  const [messages, setMessages] = useState([]);

  // Load data from localStorage when the page loads
  useEffect(() => {
    const places = JSON.parse(localStorage.getItem("savedPlaces")) || []; // Get saved places
    setSavedPlaces(places);

    const storedMessages = JSON.parse(localStorage.getItem("messages")) || []; // Get messages
    setMessages(storedMessages);
  }, []);

  // Delete a saved place by ID
  const handleDelete = (id) => {
    const updatedPlaces = savedPlaces.filter((place) => place.id !== id);
    setSavedPlaces(updatedPlaces);
    localStorage.setItem("savedPlaces", JSON.stringify(updatedPlaces)); // Save changes to localStorage
    onDeletePlace(updatedPlaces.length);
  };

  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-lg-8">
          <h3>Saved Properties</h3>
          {savedPlaces.length === 0 ? (
            <p>No saved properties.</p>
          ) : (
            savedPlaces.map((place) => (
              <div key={place.id} className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={place.images[0]}
                      alt={place.type}
                      className="img-fluid rounded-start"
                      style={{ height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5>{place.type}</h5>
                      <p>{place.address}</p>
                      <p>
                        <span className="badge bg-primary">
                          ${place.price.toLocaleString()}
                        </span>
                      </p>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(place.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div
          className="col-lg-4"
          style={{ backgroundColor: "#fcf6f2", padding: "20px", borderRadius: "8px" }}
        >
          <h3>Messages</h3>
          {messages.length === 0 ? (
            <p>No messages yet.</p>
          ) : (
            <ul className="list-unstyled">
              {messages.map((message, index) => (
                <li key={index} className="mb-3">
                  <p className="mb-1 fw-bold">{message.agent}</p>
                  <p className="mb-0">{message.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
