import { useContext } from 'react'
import './Menu.css'
import menu from './Menu.module.css'
import { links } from '../../utils/links'
import { AppContext } from '../../Context/AppContext'

const Menu = () => {
    const { navMenu, menuRef, showMenu } = useContext(AppContext)

    return (
        <div ref={menuRef} className={`menuContainer ${navMenu ? 'active' : 'inactive'}`}>
            { links && links.map((link, i) => {
                return (
                    <div className={menu.links} key={i} onClick={showMenu}>
                        { link.type === 'Terms & Conditions' ? <a target='_blank' rel="noreferrer" href={link?.link}>{link.type}</a> : <a href={link?.link}>{link.type}</a> }
                    </div>
                )
            })}
        </div>
    )
}

export default Menu