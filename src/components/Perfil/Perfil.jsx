import "./perfil.css";
import React from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { DiAptana } from "react-icons/di";
import { FaExchangeAlt } from 'react-icons/fa';
import { FiHelpCircle } from "react-icons/fi";



const Perfil = () => {
    return (
        <div className="perfilContainer">
            <div className="perfilTopNav">
                <Link to={"/home"} className="appNotificationIcon"><AiOutlineArrowLeft /></Link>
                <span className="appNotificationTextMenu">Perfil</span>
            </div>
            <div className="perfilOptionsContainer">
                <p className="perfilOptions"><DiAptana/>Configuracion</p>
                <p className="perfilOptions"><FaExchangeAlt/>Cambiar contraseña</p>
                <p className="perfilOptions"><FiHelpCircle/>Ayuda</p>
                <p className="perfilOptionsSession perfilOptions">Cerrar Sesion</p>
            </div>
        </div>
    )
}

export default Perfil;