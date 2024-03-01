/* eslint-disable react/prop-types */
import { createContext, useRef, useState } from 'react'

export const AppContext = createContext();

export const AppContextProvider = props => {
    const menuRef = useRef(null);
    const serviceRef = useRef(null);
    const areaRef = useRef(null);
    const priceRef = useRef(null);
    const [navMenu, setNavMenu] = useState(false);
    const showMenu = () => setNavMenu(!navMenu);
    
    return (
        <AppContext.Provider 
            value={{ 
                menuRef,
                serviceRef,
                areaRef,
                priceRef,
                navMenu, 
                setNavMenu,
                showMenu
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}