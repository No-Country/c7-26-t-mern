import React from "react";
import TopNav from "../../Components/Nav/TopNav/TopNav";
import BotNav from "../../Components/Nav/BotNav/BotNav";
import profileClaimmer from "../../Assets/img/imgClaimer.jpg";
import { MdVerified } from "react-icons/md";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import "./claimDetail.css";

const ClaimStatus = () => {
  return (
    <div>
      <TopNav text={"Proceso del reclamo"} />
      <div className="claimPrimaryInfo">
        <div className="claimCategoryImageContainer">
          <img
            src="https://i.ibb.co/yVyNQ7w/postAgua.jpg"
            alt="claimCategoryImage"
            className="claimCategoryImage"
          />
        </div>

        <div className="titlesAndProfileImg">
          <div className="titles">
            <h5 className="secudnaryTitle">Categoria: Ague e Higiene</h5>
            <h3 className="principalTitle">¡No tenemos agua!</h3>
          </div>
          <img
            className="imgClaimmer imgClaimmerDetail"
            src={profileClaimmer}
            alt="imgClaimmer"
          />
        </div>
      </div>
      <div className="progressBar">
        <div className="bar">
          <div className="barPainted">
            <div className="point"></div>
          </div>
        </div>
        <div className="progressTitlesDiv">
          <p className="progressTitle">Enviado</p>
          <p className="progressTitle">Visto</p>
          <p className="progressTitle">Respuesta</p>
          <p className="progressTitle">Solución</p>
        </div>
      </div>
      <div className="institutionAndButtons">
        <div className="institutionInfo">
          <img
            className="imgClaimmer imgTakeDecisionsDetail"
            src={profileClaimmer}
            alt="imgClaimmer"
          />
          <div className="institutionInfoTitles">
            <p className="institutionName">Municipalidad de Córdoba</p>
            <p className="institutionAddress">Dirección: Av. Colón 579</p>
          </div>
          <MdVerified className="verifyIcon" />
        </div>
        <div className="buttonsInstitutions">
          <PrimaryButton
            text="Ver Institución"
            color="white"
            bg="var(--color-bg-primary)"
            className="firstButton"
          />
          <PrimaryButton
            text="Insistir"
            color="var(--color-bg-primary)"
            bg="var( --color-bg-secondary)"
            className="secondButton"
          />
        </div>
      </div>
      <BotNav />
    </div>
  );
};

export default ClaimStatus;
