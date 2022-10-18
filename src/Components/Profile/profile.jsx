import "./profile.css";
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
                <Link to={"/configuracion"} className="perfilOptions"><DiAptana />Configuracion</Link>
                <Link to={"/password"} className="perfilOptions"><FaExchangeAlt />Cambiar contraseña</Link>
                <Link to={"/ayuda"} className="perfilOptions"><FiHelpCircle />Ayuda</Link>
                <Link to={"/"} className="perfilOptionsSession perfilOptions">Cerrar Sesion</Link>
            </div>
        </div>
    )
}

export default Perfil;