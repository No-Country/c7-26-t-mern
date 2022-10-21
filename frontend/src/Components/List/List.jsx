import React, { useState, useEffect } from "react";
import ThemeCard from "../ThemeCard/ThemeCard";
import { themesData } from "../../datas/themesData";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import SearchNewClaim from "../SearchNewClaim/SearchNewClaim";
import "./list.css";
import axios from "axios";

const URL = "http://localhost:4000/api/v1";

const List = () => {
  //Llamar axios data
  const [categories, setCategories] = useState([]);
  const [token, setToken] = window.localStorage.getItem("token");

  useEffect(() => {
    const getCategories = async () => {
      let response;
      if (token.length > 0) {
        const { data: array } = await axios.get(`${URL}/institutions`);
        response = array;
        setCategories(response.data);
      } else {
        function error(params) {
          console.error("No se han encontrado categories");
          console.log(params);
        }
      }
      console.log(response);
    };
    getCategories();
  }, [token]);

  return (
    <>
      <div className="appNotificationMenu">
        <Link to={"/home"} className="appNotificationIcon">
          <AiOutlineArrowLeft />
        </Link>
        <span className="appNotificationTextMenu">Nuevo Reclamo</span>
      </div>
      <SearchNewClaim />
      <Link to={"/institutionclaims"}>
        <div className="themeCardContent">
          {/* {categories.map(({ url, title, id }, idx) => (
            <ThemeCard url={url} title={title} key={idx} id={id} />
          ))} */}
        </div>
      </Link>
    </>
  );
};

export default List;
