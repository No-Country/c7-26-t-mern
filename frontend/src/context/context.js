import React, { useState, createContext } from "react";

//1- Importamos y inicializamos nuestro CreateContext
export const Context = createContext();

// 2. Definimos nuestro Provider
export const ContextProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");

    const emailValidation = (value) => {
        let emailValue = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
        if(emailValue){
          setEmail(true)
        }
        setEmail(false)
      }


    return (
        //3. pasamos al Provider el "value" para los componentes que consuman el context
        <Context.Provider value={{
            emailValidation,
            email,
            
        }
        }>
            {children}
        </Context.Provider>
    )
}