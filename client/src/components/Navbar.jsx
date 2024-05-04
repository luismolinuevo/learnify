import React from "react";
import { Link } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "./general/Avatar";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/">Courses</Link>
      <Input />
      <NotificationsNoneIcon />
      <Avatar />
    </nav>
  );
}
