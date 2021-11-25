import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import "./diskonpage.css";

export default function DiskonPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://my-json-server.typicode.com/farizan17/burgerdb/db"
        );
        setData(res.data.voucher);
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
      <Link to="/">
        <BsFillArrowLeftCircleFill className="contain-voucher" />
      </Link>
      {data.map((item, index) => {
        return (
          <div className="voucher-wrapper">
            <Link to={"/voucher/" + item.restaurant}>
              <div className="voucher-wrapper-nextgen">
                <img
                  className="voucher-photo"
                  src={item.image}
                  alt="gambar resto"
                />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
