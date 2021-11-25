import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";
import "./explore.css";
import { Link } from "react-router-dom";

export default function Search() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://my-json-server.typicode.com/farizan17/burgerdb/db"
        );
        setData(res.data.resto);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="main-container">
      {data.map((item, index) => {
        return (
          <div className="burgerbar-wrapper">
            <Link to={"/bar/" + item.restaurant}>
              <div className="burger-wrapper-nextgen">
                <img
                  className="resto-photo"
                  src={item.image}
                  alt="gambar resto"
                />
                <div className="resto-profile-wrapper">
                  <div className="resto-name">{item.restaurant}</div>
                  <div className="address-wrapper">
                    <IoLocationSharp className="icon-search" />
                    <div className="resto-address">{item.addresses}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
