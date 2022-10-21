import React, { useEffect, useState } from "react";
import TopNav from "../../Components/Nav/TopNav/TopNav";
import BotNav from "../../Components/Nav/BotNav/BotNav";
import TopToggle from "../../Components/TopToggle/TopToggle";
import noResultsFoundIllustration from "../../Assets/img/noResultsFoundIllustration.svg";
import "./myClaims.css";
import axios from "axios";

const URL = "http://localhost:4000/api/v1";

const MyClaims = () => {
  const [claims, setClaims] = useState([]);
  const [active, setActive] = useState("1");
  const [claimmerId, setClaimmerId] = useState(
    window.localStorage.getItem("id")
  );

  const handleClick = (event) => {
    setActive(event.target.id);
  };

  useEffect(() => {
    const getClaimsByClaimmerId = async () => {
      let query;
      let response;
      if (claimmerId != 0) {
        query = `claimmerId=${claimmerId}`;
        const { data: array } = await axios.get(`${URL}/claims?${query}`);
        response = array;
        setClaims(response.data);
      }
      console.log(response);
    };
    getClaimsByClaimmerId();
  }, [claimmerId]);

  return (
    <div>
      <TopNav className="toggleViewTopNav" text={"Mis Reclamos"} />
      <TopToggle
        handleClick={handleClick}
        option={active}
        option1="CREADOS POR MÍ"
        option2="VOTADOS"
      />
      <div className="noContentAvaible">
        <img
          className="noResultsImg"
          src={noResultsFoundIllustration}
          alt="No results found illustration"
        />
        <p className="noResultsText">Aún no tienes ningún reclamo</p>
      </div>
      <BotNav />
    </div>
  );
};
export default MyClaims;
