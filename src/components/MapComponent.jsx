// import React from "react";
// import propertiesData from "../properties.json";

// const PropertyMap = () => {
//   return (
//     <div>
//       {propertiesData.properties.map((property) => {
//         const coordinates = hardcodedCoordinates[property.address];

//         if (!coordinates) {
//           return <p key={property.id}>Coordinates not available for {property.address}</p>;
//         }

//         return (
//           <div key={property.id} style={{ marginBottom: "20px" }}>
//             <h3>{property.type} (ID: {property.id})</h3>
//             <MapContainer
//               center={coordinates}
//               zoom={13}
//               style={{ height: "300px", width: "100%" }}
//             >
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//               />
//               <Marker position={coordinates}>
//                 <Popup>{property.address}</Popup>
//               </Marker>
//             </MapContainer>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default PropertyMap;
