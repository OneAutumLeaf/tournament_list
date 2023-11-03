import React from "react";
import "./DummyPage.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Home2 from "./Home2";

const DummyPage = () => {
  return (
    <div>
      <div>
        <div className="alignment">
          <Sidebar />
          <div className="secondary-alignment">
            <Navbar />
            <Home2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DummyPage;
