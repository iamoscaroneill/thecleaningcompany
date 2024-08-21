import { useContext } from 'react';
import { blob } from '../../utils/photos';
import nav from './Navigation.module.css';
import { AppContext } from '../../Context/AppContext';


const Title = () => {
    return (
        <div className={nav.title}>
            <img className={nav.nav_logo} src={blob.mint} alt='main-logo'/>
            <h3><a href='/'>The Cleaning Company</a></h3>
        </div>
    )
}

const MenuButton = () => {
    const { menuRef, showMenu } = useContext(AppContext);
    return (
        <div ref={menuRef} className={nav.menuButton} onClick={showMenu}>
            <i className="fa-solid fa-bars"></i>
            <h4 className={nav.menuText}>Menu</h4>
        </div>
    )
}

const LinkPlatter = () => {
    const { serviceRef, priceRef } = useContext(AppContext);

    return (
        <div className={nav.platter}>
            <ul>
                <li><a href="#services" onClick={() => { serviceRef.current?.scrollIntoView({ behavior: 'smooth' }) }}>Services</a></li>
                <li><a href="#pricing" onClick={() => { priceRef.current?.scrollIntoView({ behavior: 'smooth' }) }}>Pricing</a></li>
                <li><a href='https://discount.thecleaningcompany.xyz' target='_blank' rel="noreferrer">Discounts</a></li>
                <li><a href="#contact" onClick={() => { serviceRef.current?.scrollIntoView({ behavior: 'smooth' }) }}>Contact Us</a></li>
            </ul>
        </div>
    )
}

const Schedule = () => {
    return ( 
        <a className={nav.schedule} href='https://thecleaningcompany-nyc.setmore.com/services' target="_blank" rel="noopener noreferrer nofollow">
            <h4 className={nav.appText}>Schedule</h4>
            <i className="fa-regular fa-clock"></i>
        </a>
    )
}

const Navigation = () => {
  return (
    <div className={nav.container}>
        <MenuButton/>
        <Title/>
        <LinkPlatter/>
        <Schedule/>
    </div>
  )
}

export default Navigation