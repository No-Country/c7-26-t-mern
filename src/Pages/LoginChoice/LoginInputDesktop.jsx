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

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (input) => (e) => {
    setForm((state) => ({
      ...state,
      [input]: e.target.value
    }))
  }

  const emailValidation = () => {
    let emailValue = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.email)
    if(emailValue || form.email === ""){
      return true
    }
    return false
  }

  const passwordValidation = () => {
    let passwordValue = /^(?=.*[A-Z].*[a-z]).{8,16}$/.test(form.password)
    if (passwordValue || form.password === ""){
      return true
    }
    return false
  }

  let buttonHandlerColor =
  form.email === "" ||
  form.password === "" 

  const buttonDisable = () => {
    let email = emailValidation()
    let password = passwordValidation()

    if(email && password && !buttonHandlerColor){
      return true
    }
    return false
  }

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
      onChange={handleChange('email')}
      defaultValue={form.email}
      />
      {!emailValidation() && <span>*Por favor, introduzca un email valido</span>}

      <InputField 
      type={"password"}
      label={"Contraseña"}
      onChange={handleChange('password')}
      defaultValue={form.password}
      ></InputField>
      {!passwordValidation() && <span>*La contraseña debe contener al menos:
         Una letra mayuscula, Una letra minuscula y tener una longitud de 8 a 16 caracteres
         </span>}

      <PrimaryButton
        text="INICIA SESION"
        bg={buttonDisable() ? "#FFE9AC" : "#8E938D"}
        color={buttonDisable() ? "#8F0000" : "#F0F0F0"}
        // onClick={funcion para iniciar sesion}
        disabled={buttonDisable() ? "" : "false"}
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
