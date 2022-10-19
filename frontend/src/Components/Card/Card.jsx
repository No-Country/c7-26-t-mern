import React from "react";
import { BiUpvote } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./card.css";

// Image Claimmer
import profileClaimmer from "../../Assets/img/imgClaimer.jpg";

const Card = ({ title, address, status, description }) => {
  return (
    <div className="claimContainer">
      <div className="claimTopInfo">
        <img className="imgClaimmer" src={profileClaimmer} alt="imgClaimmer" />
        <div className="claimTitleAndSubtitle">
          <h3 className="claimTitle">{title}</h3>
          <h5 className="claimSubtitle">{address}</h5>
        </div>
      </div>
      <div className="claimContent">
        <img
          className="claimPrincipalImg"
          src="https://i.ibb.co/ZGCXT4D/agua2.jpg"
          alt="imgClaim"
        />
        <div className="claimBottomInfo">
          <p className="claimDescription">{description}</p>
          <div className="barVote">
            <div className="barPaintedVoted">
              <div className="lineVoteProgress"></div>
            </div>
          </div>
          <div className="claimButtons">
            <Link className="seeProgressLink" to="/claimdetail">
              <button className="seeProgressButton">VER ESTADO</button>
            </Link>
            <div className="claimIconsBottom">
              <p className="vote">
                <span>150</span> VOTOS
              </p>
              <BiUpvote className="upVoteIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
