import "./profile.css";
import React from 'react';
import { Link } from 'react-router-dom';
import { DiAptana } from "react-icons/di";
import { FaExchangeAlt } from 'react-icons/fa';
import { FiHelpCircle } from "react-icons/fi";
import TopNav from "../../Components/Nav/TopNav/TopNav";
import { AiOutlineArrowLeft } from "react-icons/ai";
import SectionTitle from "../../Components/SectionTitle/SectionTitle"
import InputReclamo from "../../Components/InputReclamo/InputReclamo";
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton'



const Perfil = () => {
    return (
        <div className="perfilContainer">
            <div className="perfilTopNav">
                <Link to={"/home"} className="appNotificationIcon"><AiOutlineArrowLeft /></Link>
                <span className="appNotificationTextMenu">Perfil</span>
            </div>

            <div className="topNavDinamicContainer">
                <TopNav
                    className="topNav" />
            </div>

            <SectionTitle title="Perfil" />

            {/* <div className="perfilOptionsContainer">
                <Link to={"/configuracion"} className="perfilOptions"><DiAptana />Configuracion</Link>
                <Link to={"/password"} className="perfilOptions"><FaExchangeAlt />Cambiar contraseña</Link>
                <Link to={"/ayuda"} className="perfilOptions"><FiHelpCircle />Ayuda</Link>
                <Link to={"/"} className="perfilOptionsSession perfilOptions">Cerrar Sesion</Link>
            </div> */}

            <div className="inputProfileContainer">
            <InputReclamo
            className='inputBoxProfile'
            type={"text"}
            label={"Roberto Gonzalez"}
            name="nombre"
            readOnly="readOnly"
            disabled={""}/>

            <InputReclamo
            className='inputBoxProfile'
            type={"text"}
            label={"Roberto123"}
            name="usuario"
            readOnly="readOnly"
            disabled={""}/>

            <InputReclamo
            className='inputBoxProfile'
            type={"email"}
            label={"roberto123@gmail.com"}
            name="email"
            readOnly="readOnly"
            disabled={""}/>

            <InputReclamo
            className='inputBoxProfile'
            type={"text"}
            label={"1122334455"}
            name="telefono"
            readOnly="readOnly"
            disabled={""}/>

            <button className="profileButton">GUARDAR CAMBIOS</button>
            <Link to="/"><button className="profileSession">CERRAR SESION</button></Link>
            </div>


        </div>
    )
}

export default Perfil;