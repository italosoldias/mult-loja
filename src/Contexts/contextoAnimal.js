import React, { createContext, useState, useCallback, useEffect} from "react";

export const ModalContexto =  createContext()
export const ModalProvedor = ({children}) => {
    const [modalHabilitado,setModalHabilitado] = useState(false)
    function mudaModal () {
        setModalHabilitado (modalHabilitado === false ? true : false)
    }
    return (
        <ModalContexto.Provider value={{modalHabilitado, mudaModal}}> 
            {children}
        </ModalContexto.Provider>
    )

}