import React from "react";
import TopNav from "../../Components/Nav/TopNav/TopNav";
import BotNav from "../../Components/Nav/BotNav/BotNav";
import TopToggle from "../../Components/TopToggle/TopToggle";
import noResultsFoundIllustration from "../../Assets/img/noResultsFoundIllustration.svg";
import "./myClaims.css";

const MyClaims = () => {
  return (
    <div>
      <TopNav className="toggleViewTopNav" text={"Mis Reclamos"} />
      <TopToggle option1="CREADOS POR MÍ" option2="VOTADOS" />
      <div className="noContentAvaible">
        <img
          className="noResultsImg"
          src={noResultsFoundIllustration}
          alt="No results found illustration"
        />
        <p className="noResultsText">Aún no tienes ningún reclamo</p>
      </div>
      <button className="addNewClaim">+ NUEVO RECLAMO</button>
      <BotNav />
    </div>
  );
};

export default MyClaims;
