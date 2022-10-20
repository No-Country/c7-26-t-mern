import { useState } from "react";

import InputField from "../../Components/InputField/InputField";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import LoginButtons from "../Login/loginComponents/LoginButtons/loginButtons";

//import "./LoginChoice.css";
import "./LoginInputDesktop.css";

const LoginInputDesktop = () => {

  const [option, setOption] = useState('reclamante')

  const pStyle = {color: '#8f0000'}
  const hrStyle = {borderTop: '4px solid #8f0000'}

  const selecte = (selection) => (
    setOption(selection)
  )

  return (
    <div className="sectionLoginChoiceContainerButtons">
      <div className="selected">
        <div 
        className="selectedOption" 
        onClick={() => selecte('reclamante')}
        >
          <p style={option === 'reclamante' ? pStyle : {}}>
            RECLAMANTE
          </p>
          <hr style={option === 'reclamante' ? hrStyle : {}}/>
        </div>

        <div 
        className="selectedOption"
        onClick={() => selecte('institucion')}
        >
          <p style={option === 'institucion' ? pStyle : {}}>
            INSTITUCIÓN
            </p>
          <hr style={option === 'institucion' ? hrStyle : {}}/>
        </div>
      </div>
      <InputField 
      type={"text"} 
      label={"Correo"} 
      />

      <InputField 
      type={"text"}
      label={"Contraseña"}
      />
      <PrimaryButton
        text="INICIA SESION"
        bg="#FFE9AC"
        color="#8F0000"
        to="/login"
      />

      <div className="textHr">
        <hr></hr>
        <p>O continuar con</p>
        <hr></hr>
      </div>

      {option === 'reclamante' ? <LoginButtons/> : ''}
      {option === 'reclamante' ? 
          <div className="textQuestionRegister">
            <hr></hr>
            <p>¿No tenés una cuenta?</p>
            <hr></hr>
          </div>
          :
          ''
      }
      <PrimaryButton
        text="REGISTRATE"
        bg="#8F0000"
        color="#F0F0F0"
        to="/register"
      />
    </div>
  );
};

export default LoginInputDesktop;
