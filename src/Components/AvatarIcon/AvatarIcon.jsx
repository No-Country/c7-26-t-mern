import './avataricon.css';
import React from 'react';
import Avatar from "../../Assets/img/iconAvatar.svg"

export const AvatarIcon = () => {
    return (
        <div>
            <img className="iconImgAvatar" src={Avatar} alt="" />
        </div>
    )
}
