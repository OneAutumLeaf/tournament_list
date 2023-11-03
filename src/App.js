import React from "react";
import HomePage from "./Homepage.js";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Tournament from "./Tournament.js";
import "./App.css";
import DummyPage from "./Dummypage/DummyPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/user" element={<DummyPage/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
