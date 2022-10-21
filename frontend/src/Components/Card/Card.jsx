import React from "react";
import { BiUpvote } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./card.css";

// Image Claimmer
import profileClaimmer from "../../Assets/img/imgClaimer.jpg";

const Card = ({ title, address, status, description }) => {
  return (
    <div className="cardClaimContainer">
      <div className="cardClaimHeader">
        <img src={profileClaimmer} alt="" />
        <div>
          <h4>{props.title}</h4>
          <p>{props.subtitle}</p>
        </div>
      </div>
      <div className="cardClaimImg">
        <div>
          <img src={"https://i.ibb.co/ZGCXT4D/agua2.jpg"} alt="" />
        </div>
      </div>
      <div className="cardClaimDescription">{props.description}</div>

      <div className="cardClaimBottom">
        <div className="claimStatusSectionContianerProgressFullBar">
          <div className="claimStatusSectionContianerProgressBar"></div>
        </div>
        <div className="cardClaimBottomContainer">
          <div className="cardClaimBottomLeft">
            <button className="seeProgressButton">ESTADO</button>
            <span className="cardClaimDate">16 de Octubre de 2022</span>
          </div>
          <div className="cardClaimBottomRight">
            <p>
              <span>208</span> votos
            </p>
            <span>
              <BiUpvote size={17} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
