import React from "react";
import "./about.css";
import "./main.css";

export default function About() {
  return (
    <div className="main-container about">
      <div className="profile-wrapper">
        <img src="/profil.jpg" alt="profil" />
        <div className="text-wrapper">
          <p>
            This App was made to fulfill Final Assignment of Mobile Device
            Programming Practice.
          </p>
          <hr class="solid" />
          <p>Made by Muhammad Farizan Kholis</p>
        </div>
      </div>
    </div>
  );
}
