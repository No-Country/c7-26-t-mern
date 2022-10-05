import React from "react";
import ThemeCard from "../ThemeCard/ThemeCard";
import { themesData } from "../../assets/datas/themesData";
import "./themelist.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import SearchNewClaim from "../SearchNewClaim/SearchNewClaim";

const ThemeList = () => {
  return (
    <>
      <div className="appNotificationMenu">
        <Link to={"/home"} className="appNotificationIcon">
          <AiOutlineArrowLeft />
        </Link>
        <span className="appNotificationTextMenu">Nuevo Reclamo</span>
      </div>
      <SearchNewClaim />
      <div className="themeCardContent">
        {themesData.map((card, idx) => (
          <ThemeCard url={card.url} title={card.title} key={idx} />
        ))}
      </div>
    </>
  );
};

export default ThemeList;
