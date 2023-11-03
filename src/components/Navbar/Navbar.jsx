import React from "react";
import "./Navbar.css";
// import{SlCalender} from "react-icons/sl";
// import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="butBar">
        <button className="butfirst">Active Users</button>
        <button className="but">Banned Users</button>
        <button className="but">Suspicios Users</button>
        <button className="butlast">Deleted Accounts</button>
      </div>
      <div className="bars">
        {/* <AiOutlineSearch /> */}
        <input
          type="search"
          placeholder="Search with Name, mail id, GT-id"
          className="search"
        />
        <div className="dateDiv">
          <input type="text" placeholder="From date" className="dateBut"/>
          {/* <SlCalender className="datecal"/> */}
        </div>
        <div className="dateDiv">
          <input type="text" placeholder="To date" className="dateBut"/>
          {/* <SlCalender className="datecal"/> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
