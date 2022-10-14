import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";
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
          src="https://i.ibb.co/q9yfYSv/postimg.png"
          alt="imgClaim"
        />
        <div className="claimBottomInfo">
          <p className="claimDescription">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
            porro.
          </p>
          <div className="claimButtons">
            <Link className="seeProgressLink" to={"/claimDetail"}>
              <button className="seeProgressButton">VER PROGRESO</button>
            </Link>
            <div className="claimIconsBottom">
              <p className="vote">
                <span>150</span> VOTOS
              </p>
              <FaRegHeart className="heartIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
