import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import propertiesData from "../properties.json";

// Fix leaflet marker icons issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Hardcoded coordinates for Sri Lankan addresses
const hardcodedCoordinates = {
  "No. 12, Temple Road, Nugegoda, Colombo": [6.865, 79.899],
  "No. 45, Marine Drive, Dehiwala, Colombo": [6.851, 79.865],
  "No. 23, Upper Lake Road, Kandy": [7.290, 80.631],
  "No. 12, Beach Road, Galle": [6.028, 80.215],
  "No. 45, Park Lane, Colombo 3": [6.920, 79.870],
  "No. 8, Lagoon View Road, Negombo": [7.200, 79.833],
  "No. 55, Urban Towers, Rajagiriya": [6.927, 79.893],
};

const PropertyMap = () => {
  return (
    <div>
      {propertiesData.properties.map((property) => {
        const coordinates = hardcodedCoordinates[property.address];

        if (!coordinates) {
          return <p key={property.id}>Coordinates not available for {property.address}</p>;
        }

        return (
          <div key={property.id} style={{ marginBottom: "20px" }}>
            <h3>{property.type} (ID: {property.id})</h3>
            <MapContainer
              center={coordinates}
              zoom={13}
              style={{ height: "300px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={coordinates}>
                <Popup>{property.address}</Popup>
              </Marker>
            </MapContainer>
          </div>
        );
      })}
    </div>
  );
};

export default PropertyMap;
