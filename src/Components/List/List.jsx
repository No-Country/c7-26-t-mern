import React from "react";
import ThemeCard from "../ThemeCard/ThemeCard";
import { themesData } from "../../datas/themesData";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import SearchNewClaim from "../SearchNewClaim/SearchNewClaim";
import "./list.css";

const List = () => {
  //Llamar axios data

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
          {themesData.map(({ url, title, id }, idx) => (
            <ThemeCard url={url} title={title} key={idx} id={id} />
          ))}
        </div>
      </Link>
    </>
  );
};

export default List;
