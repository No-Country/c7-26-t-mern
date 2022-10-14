import "./avataricon.css";
import React from "react";
import Avatar from "../../Assets/img/iconAvatar.svg";

export const AvatarIcon = () => {
  return (
    <div className="avatarIcon">
      <img className="iconImgAvatar" src={Avatar} alt="" />
    </div>
  );
};
