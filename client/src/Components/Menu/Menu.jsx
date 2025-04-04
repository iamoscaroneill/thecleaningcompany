import { useContext } from 'react'
import './Menu.css'
import menu from './Menu.module.css'
import { links } from '../../utils/links'
import { AppContext } from '../../Context/AppContext'
import SetElement from '../../utils/setElement'

const Menu = () => {
    const { navMenu, menuRef, showMenu, serviceRef, priceRef} = useContext(AppContext)

    return (
        <div ref={menuRef} className={`menuContainer ${navMenu ? 'active' : 'inactive'}`}>
            {/* Menu Button (Close) */}
            <button id="closeMenu_button" className={`closeButton ${navMenu ? 'active' : 'inactive' }`} onClick={showMenu}>Close</button>
            
            {/* Links */}
            { links && links.map((link, i) => {

                return (
                    SetElement(link, i, menu, showMenu, menuRef, serviceRef, priceRef)
                )
            })}

            <div id="copyright_menu">© 2025 The Cleaning Company of New York, LLC</div>
        </div>
    )
}

export default Menu