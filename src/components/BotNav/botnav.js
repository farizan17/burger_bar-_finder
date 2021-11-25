import React from "react";
import { NavLink } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { MdExplore } from "react-icons/md";
import "./botnav.css";

export default function NavBot() {
  return (
    <nav>
      <div className="navbot">
        <NavLink to="/" className="nav-wrapper">
          <AiFillHome size="25" color="white" />
        </NavLink>
        <NavLink to="/explore" className="nav-wrapper">
          <MdExplore size="30" color="white" />
        </NavLink>
        <NavLink to="/about" className="nav-wrapper">
          <BsFillInfoCircleFill size="25" color="white" />
        </NavLink>
      </div>
    </nav>
  );
}
