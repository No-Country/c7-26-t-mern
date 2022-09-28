import React from "react";

import "./loginButtons.css";
import GoogleIcon from "../../../../Assets/img/Google Logo.svg";
import FacebookIcon from "../../../../Assets/img/Facebook Logo.svg";

const LoginButtons = (prop) => {
  return (
    <div className="loginButtonContainer">
      <button className="loginButton" href="/">
        <img src={GoogleIcon} alt="" className="loginButtonIcon" />
        Google
      </button>
      <button className="loginButton" href="/">
        <img src={FacebookIcon} alt="" className="loginButtonIcon" />
        Facebook
      </button>
    </div>
  );
};

export default LoginButtons;
