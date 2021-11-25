import React from "react";
import {
  FaHamburger,
  FaHotdog,
  FaWineGlass,
  FaBirthdayCake,
  FaPizzaSlice,
  FaMugHot,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./homepage.css";
import "./main.css";

export default function HomePage() {
  return (
    <div className="main-container">
      <Link to="/diskon">
        <div className="banner-wrapper">
          <img src="/burgerbanner.png" alt="banner" />
        </div>
      </Link>
      <div className="resto-wrapper">
        <div className="burgerbar">
          <FaHamburger className="contain-bar" />
        </div>
        <div className="burgerbar">
          <FaHotdog className="contain-bar" />
        </div>
        <div className="burgerbar">
          <FaWineGlass className="contain-bar" />
        </div>
        <div className="burgerbar">
          <FaPizzaSlice className="contain-bar" />
        </div>
        <div className="burgerbar">
          <FaBirthdayCake className="contain-bar" />
        </div>
        <div className="burgerbar">
          <FaMugHot className="contain-bar" />
        </div>
        <div className="burgerbar">
          <FaTimes className="contain-bar" />
        </div>
        <div className="burgerbar">
          <FaTimes className="contain-bar" />
        </div>
      </div>
    </div>
  );
}
