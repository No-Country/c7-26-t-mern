import "./notification.css";
import React from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';



const AppNotification = () => {
    return (
        <div className="appNotificationContainer">
            <div className="appNotificationMenu">
                <Link to={"/home"} className="appNotificationIcon"><AiOutlineArrowLeft /></Link>
                <span className="appNotificationTextMenu">Notificaciones</span>
            </div>
            <div className="notificationsContainer">
                <p className="notificationsContainerText">
                No tienes ninguna notificacion.
                </p>
            </div>
        </div>
    )
}

export default AppNotification;