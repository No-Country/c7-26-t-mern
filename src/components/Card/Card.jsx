import React, { useState } from "react";
import "./card.css";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";
import HiddenCard from "../HiddenCard/HiddenCard";

const Card = () => {
  const [claimTotalInfo, toggleHiddenCard] = HiddenCard(
    <div>
      <img
        className="claimPrincipalImg"
        src="https://http2.mlstatic.com/D_NQ_NP_676158-MLA44311719800_122020-O.jpg"
        alt="imgClaim"
      />
      <div className="claimBottomInfo">
        <p className="claimDescription">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          laborum.
        </p>
        <div className="claimButtons">
          <button className="seeProgressButton">Ver progreso</button>
          <div className="claimIconsBottom">
            <FaRegHeart />
            <BsFillShareFill />
          </div>
        </div>
      </div>
    </div>,
    true
  );
  return (
    <div className="claimContainer">
      <div className="claimTopInfo">
        <img
          className="imgClaimmer"
          src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg"
          alt="imgClaimmer"
        />
        <div className="claimTitleAndSubtitle">
          <h3 className="claimTitle">Lorem title</h3>
          <h5 className="claimSubtitle">lorem subtitle</h5>
        </div>
        <MdKeyboardArrowUp
          className="claimArrowUp"
          onClick={toggleHiddenCard}
        />
      </div>
      {claimTotalInfo}
    </div>
  );
};

export default Card;
