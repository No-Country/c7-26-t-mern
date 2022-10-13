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
      <Link to={"/nuevoreclamo"}>
        <div className="themeCardContent">
          {themesData.map((card, idx) => (
            <ThemeCard url={card.url} title={card.title} key={idx} />
          ))}
        </div>
      </Link>
    </>
  );
};

export default List;
