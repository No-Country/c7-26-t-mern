import React from "react";

import { useNavigate } from "react-router-dom";

import StatusCard from "./StatusCard/StatusCard";
import InstitutionCard from "../NewClaim/InstitutionCard";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { RiShareLine } from "react-icons/ri";
import { BiUpvote } from "react-icons/bi";

import "./claimStatus.css";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";

const ClaimStatus = () => {
  let navigate = useNavigate();

  function navigateHome(event) {

    // await submitForm(event.target);
    navigate("/home", { replace: true });
    // replace: true will replace the current entry in
    // the history stack instead of adding a new one
  }

  return (
    <React.Fragment>
      <div className="nuevoReclamoTopNav">
        <span onClick={() => {navigateHome()}} className="appNotificationIcon">
          <AiOutlineArrowLeft />
        </span>
        <h2 className="appNotificationTextMenu">{"Estado del Reclamo"}</h2>
      </div>
      <div className="claimStatusSectionContianer">
        <StatusCard />
        <h3 className="claimStatusSectionContianerTitle">Responsable</h3>
        <InstitutionCard
          src={"https://i.ibb.co/7rpmB40/agua.jpg"}
          alt={"Secretaria del agua"}
          text={"Secretaria del agua"}
        />
        <div className="claimStatusSectionContianerProgress">
          <div className="claimStatusSectionContianerProgressFullBar">
            <div className="claimStatusSectionContianerProgressBar"></div>
          </div>
          <div className="claimStatusSectionContianerProgressBarText">
            <span className="active">ENVIADO</span>
            <span>VISTO</span>
            <span>RESPUESTA</span>
            <span>SOLUCIÓN</span>
          </div>
        </div>

        <div className="claimStatusSectionContianerActions">
          <div className="claimStatusSectionContianerActionsAction">
            <BiUpvote />
            <span>VOTAR</span>
          </div>

          <div className="claimStatusSectionContianerActionsAction">
            <RiShareLine />
            <span>COMPARTIR</span>
          </div>
        </div>

        <PrimaryButton bg="#262724" text="Volver a mis reclamos" color="var(--color-primary)" to="/myClaims"/>
      </div>
    </React.Fragment>
  );
};

export default ClaimStatus;
