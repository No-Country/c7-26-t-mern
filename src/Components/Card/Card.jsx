import React from "react";
import { BiUpvote } from "react-icons/bi";
import { BsFillShareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./card.css";

// Image Claimmer
import profileClaimmer from "../../Assets/img/imgClaimer.jpg";

const Card = (props) => {
  return (
    <div className="claimContainer">
      <div className="claimTopInfo">
        <img className="imgClaimmer" src={profileClaimmer} alt="imgClaimmer" />
        <div className="claimTitleAndSubtitle">
          <h3 className="claimTitle">{props.title}</h3>
          <h5 className="claimSubtitle">{props.subtitle}</h5>
        </div>
        <BsFillShareFill className="shareIcon" />
      </div>
      <div className="claimContent">
        <img
          className="claimPrincipalImg"
          src="https://i.ibb.co/ZGCXT4D/agua2.jpg"
          alt="imgClaim"
        />
        <div className="claimBottomInfo">
          <p className="claimDescription">{props.description}</p>
          <div className="barVote">
            <div className="barPaintedVoted">
              <div className="lineVoteProgress"></div>
            </div>
          </div>
          <div className="claimButtons">
            <Link className="seeProgressLink" to="/claimdetail">
              <button className="seeProgressButton">ESTADO</button>
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
