import React from "react";
import { useLocation } from "react-router-dom";

import {AiFillCopy} from "react-icons/ai";


import "./statusCard.css";
import ImageCliamer from "../../../Assets/img/imgClaimer.jpg";
import Card from "../../../Components/Card/Card";

const StatusCard = ({ isOpen }) => {

  return (


    <React.Fragment>
      <div className="statusCardContainer">
        <header className="statusCardContainerHeader">
          <span className="statusCardContainerHeaderDate">19 .10. 2022</span>
          <span className="statusCardContainerHeaderId" >ID 345OI50<AiFillCopy onClick={() => {navigator.clipboard.writeText("345OI50")}}/></span>
          
        </header>
        <div className="statusCardContainerCard">
          <div className="statusCardContainerCardTop">
            <img src={ImageCliamer} alt="Imagen del reclamante" />
            <div>
              <h4>No hay agua en el barrio</h4>
              <p>AGUA</p>
            </div>
          </div>
          <div className="statusCardContainerCardTopBody">
            <p>
              Hace 2 semanas que estamos sin agua y nadie nos escucha a través
              del teléfono. Pido por esta Aplicación que por favor nos escuchen.
              Cuantos más vecinos apoyen esta causa, podremos llegar a la
              solución.{" "}
            </p>
          </div>
          <div className="statusCardContainerCardBottom">
            <img src="https://i.ibb.co/ZGCXT4D/agua2.jpg" alt="" />
            <img src="https://i.ibb.co/ZGCXT4D/agua2.jpg" alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StatusCard;
