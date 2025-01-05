import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Profile from "../src/components/Profile";
import Header from "./components/Header";

const App = () => {
  const [savedItems, setSavedItems] = useState([]); // List of saved properties
  const [messages, setMessages] = useState([]);

  // Load saved items and messages from localStorage when the app loads
  useEffect(() => {
    const storedSavedItems = JSON.parse(localStorage.getItem("savedItems")) || []; 
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setSavedItems(storedSavedItems);
    setMessages(storedMessages);
  }, []);

  // Save the updated list of saved items to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
  }, [savedItems]);

  // Save the updated list of messages to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  // Handle saving a property
  const handleSavePlace = (property) => {
    if (!savedItems.some((item) => item.id === property.id)) {
      setSavedItems((prevSavedItems) => [...prevSavedItems, property]);
    }
  };

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleDeletePlace = (id) => {
    const updatedSavedItems = savedItems.filter((item) => item.id !== id);
    setSavedItems(updatedSavedItems);
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
          element={
            <Profile
              savedItems={savedItems}
              messages={messages}
              onDeletePlace={handleDeletePlace}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
