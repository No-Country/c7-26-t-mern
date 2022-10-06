import React, { useState, createContext } from "react";

//1- Importamos y inicializamos nuestro CreateContext
const claimmerContext = createContext();

// 2. Definimos nuestro Provider
export const ClaimmerProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function authUser(name, password) {
        setName(name)
        setPassword(password)
    }

    console.log("Tenemos context provider!")
    console.log(name);
    console.log(password);

    return (
        //3. pasamos al Provider el "value" para los componentes que consuman el context
        <claimmerContext.Provider value={{
            password,
            name,
            authUser
        }
        }>
            {children}
        </claimmerContext.Provider>
    )
}