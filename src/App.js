import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Profile from "../src/components/Profile";
import Header from "./components/Header";

const App = () => {
  const [savedItems, setSavedItems] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleSavePlace = (property) => {
    setSavedItems((prevSavedItems) => [...prevSavedItems, property]);
  };

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className="container bg-white">
      <Header savedCount={savedItems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/property/:id"
          element={
            <PropertyDetails
              onSavePlace={handleSavePlace}
              onSendMessage={handleSendMessage}
            />
          }
        />
        <Route
          path="/profile"
          element={<Profile savedItems={savedItems} messages={messages} />}
        />
      </Routes>
    </div>
  );
};

export default App;
