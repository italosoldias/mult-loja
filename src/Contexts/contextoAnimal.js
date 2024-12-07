import React, { createContext, useState, useCallback, useEffect} from "react";

export const ModalContexto =  createContext()
export const ModalProvedor = ({children}) => {
    const [modalHabilitado,setModalHabilitado] = useState(false)
    const [anexos, setAnexos] = useState('')
    function mudaModal () {
        setModalHabilitado (modalHabilitado === false ? true : false)
    }
    return (
        <ModalContexto.Provider value={{modalHabilitado, mudaModal, anexos, setAnexos}}> 
            {children}
        </ModalContexto.Provider>
    )

}