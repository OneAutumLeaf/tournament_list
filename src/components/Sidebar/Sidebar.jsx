import {RiUser3Line,RiCoupon2Line} from "react-icons/ri";
import{BiSolidDashboard,BiTransferAlt} from "react-icons/bi";
import{BsTrophy,BsPerson} from "react-icons/bs";
import{LuGamepad2} from "react-icons/lu";
import{LiaMedalSolid} from "react-icons/lia";
import "./Sidebar.css";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      
      <ul className="sidebar-list">
        <li
          className="sidebar-list-item"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          {/* <a href=""> */}
          <BiSolidDashboard className="icon" />Dashboard
          {/* </a> */}
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => {
            window.location.href = "/user";
          }}
        >
          {/* <a href=""> */}
          <RiUser3Line className="icon" /> Users
          {/* </a> */}
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => {
            window.location.href = "/tournament";
          }}
        >
          {/* <a href=""> */}
          <BsTrophy className="icon" /> Tournament
          {/* </a> */}
        </li>
        <li
          className="sidebar-list-item"
        >
          {/* <a href=""> */}
          <RiCoupon2Line className="icon" /> Integers
          {/* </a> */}
        </li>
        <li
          className="sidebar-list-item"
          
        >
          {/* <a href=""> */}
          <LuGamepad2 className="icon" /> Games
          {/* </a> */}
        </li>
        <li
          className="sidebar-list-item"
          
        >
          {/* <a href=""> */}
          <BiTransferAlt className="icon" /> Data
          {/* </a> */}
        </li>
        <li
          className="sidebar-list-item"
          
        >
          {/* <a href=""> */}
          <BsPerson className="icon" /> Roles
          {/* </a> */}
        </li>
        <li
          className="sidebar-list-item"
        >
          {/* <a href=""> */}
          <LiaMedalSolid className="icon" /> Awards
          {/* </a> */}
        </li>
        
        </ul>
    </aside>
  );
}

export default Sidebar;
