import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import "./voucher.css";
import { Link } from "react-router-dom";

export default function Voucher() {
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
        setData(res.data.voucher.find((item) => item.restaurant === id));
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
      <Link to="/diskon">
        <BsFillArrowLeftCircleFill className="contain-voucher" />
      </Link>
      <div className="voucher-wrapper-detail">
        <img
          className="voucher-photo-detail"
          src={data.image}
          alt="gambar resto"
        />
        <div className="voucher-desc-detail">
          <div className="voucher-name-detail">{data.restaurant}</div>
          <div className="voucher-exp-detail">
            <p>Exp:{data.exp}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
