import React from "react";

const Profile = ({ savedItems, messages }) => {
  return (
    <section className="container my-5">
      <div className="row">
        {/* Left Section: User Info and Saved Properties */}
        <div className="col-lg-8">
          <h2>User Information</h2>
          <div className="d-flex align-items-center gap-3 mb-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Avatar"
              className="rounded-circle"
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <div>
              <p className="mb-1 fw-bold">Username: John Doe</p>
              <p className="mb-1">E-mail: john@gmail.com</p>
            </div>
          </div>
          <h3>Saved Properties</h3>
          {savedItems.length === 0 ? (
            <p>No saved items.</p>
          ) : (
            savedItems.map((item, index) => (
              <div key={index} className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.images[0]}
                      alt={item.type}
                      className="img-fluid rounded-start"
                      style={{ height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.type}</h5>
                      <p className="card-text">{item.address}</p>
                      <p className="card-text">
                        <span className="badge bg-primary">${item.price.toLocaleString()}</span>
                        <span className="ms-2">{item.bedrooms} Bedrooms</span>
                        <span className="ms-2">{item.bathrooms} Bathrooms</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Section: Messages */}
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
