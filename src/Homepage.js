import React from 'react'
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div>
        <div className="alignment">
      <Sidebar />
      <div className="secondary-alignment">
        <Navbar />
        <Home />
      </div>
    </div>
    </div>
  )
}

export default Homepage