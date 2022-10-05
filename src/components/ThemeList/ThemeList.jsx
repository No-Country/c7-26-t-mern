import React from "react";
import ThemeCard from "../ThemeCard/ThemeCard";
import { themesData } from "../../assets/datas/themesData";
import "./themelist.css";
import TopNav from "../Nav/TopNav/TopNav";
import SearchBar from "../SearchBar/SearchBar";

const ThemeList = () => {
  return (
    <>
      <TopNav />
      <SearchBar />
      <div className="themeCardContent">
        {themesData.map((card, idx) => (
          <ThemeCard url={card.url} title={card.title} key={idx} />
        ))}
      </div>
    </>
  );
};

export default ThemeList;
