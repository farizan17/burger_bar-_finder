import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { useParams } from "react-router";
import "./bar.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Bar() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://my-json-server.typicode.com/farizan17/burgerdb/db"
        );
        setData(res.data.resto.find((item) => item.restaurant === id));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div className="main-container">
      <Link to="/explore">
        <BsFillArrowLeftCircleFill className="contain-bar-detail" />
      </Link>
      <div className="bar-wrapper-detail">
        <img className="bar-photo-detail" src={data.image} alt="gambar resto" />
        <div className="bar-detail">
          <div className="bar-name-detail">{data.restaurant}</div>
          <div className="bar-container-detail">
            <IoLocationSharp className="icon-bar" />
            <div className="bar-loc-detail">{data.addresses}</div>
          </div>
          <div className="bar-container-detail">
            <CgWebsite className="icon-bar-web" />
            <div className="bar-web-detail">{data.web}</div>
          </div>
          <div className="bar-container-detail">
            <div className="bar-desc-detail">
              <p>Description : {data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bar;
