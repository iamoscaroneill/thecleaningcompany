import { useContext } from 'react'
import './Menu.css'
import menu from './Menu.module.css'
import { links } from '../../utils/links'
import { AppContext } from '../../Context/AppContext'
import setElement from '../../utils/setElement'

const Menu = () => {
    const { navMenu, menuRef, showMenu, serviceRef, priceRef} = useContext(AppContext)

    return (
        <div ref={menuRef} className={`menuContainer ${navMenu ? 'active' : 'inactive'}`}>
            {/* Menu Button (Close) */}
            <button className={`closeButton ${navMenu ? 'active' : 'inactive' }`} onClick={showMenu}>Close</button>
            
            {/* Links */}
            { links && links.map((link, i) => {
                return (
                    setElement(link, i, menu, showMenu, menuRef, serviceRef, priceRef)
                )
            })}
        </div>
    )
}

export default Menu