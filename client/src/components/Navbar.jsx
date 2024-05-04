import React from "react";
import { Link } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import UserAvatar from "./general/Avatar";
import { TextField } from "@mui/material";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="nav-subcontainer">
        <Link to="/" className="nav-links">Home</Link>
        <Link to="/" className="nav-links">Courses</Link>
      </div>
      <div className="nav-subcontainer">
        <TextField size="small" placeholder="Search"/>
      </div>
      <div className="nav-subcontainer">
        <NotificationsNoneIcon />
        <UserAvatar />
      </div>
    </nav>
  );
}
