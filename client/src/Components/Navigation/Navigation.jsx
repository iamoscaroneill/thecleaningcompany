import { useContext } from 'react';
import { blob } from '../../utils/photos';
import nav from './Navigation.module.css';
import { AppContext } from '../../Context/AppContext';


const Title = () => {
    return (
        <a href="/" id="home_nav" className={nav.title}>
            <img id="logo_nav" className={nav.nav_logo} src={blob.mint} alt='main-logo'/>
            <h3 id="title_nav">The Cleaning Company</h3>
        </a>
    )
}

const MenuButton = () => {
    const { menuRef, showMenu } = useContext(AppContext);
    return (
        <div id="menu_button" ref={menuRef} className={nav.menuButton} onClick={showMenu}>
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
                <li><a id="services_nav" href="#services" onClick={() => { serviceRef.current?.scrollIntoView({ behavior: 'smooth' }) }}>Services</a></li>
                <li><a id="pricing_nav" href="#pricing" onClick={() => { priceRef.current?.scrollIntoView({ behavior: 'smooth' }) }}>Pricing</a></li>
                <li><a id="contact_nav" href="#contact" onClick={() => { serviceRef.current?.scrollIntoView({ behavior: 'smooth' }) }}>Contact Us</a></li>
            </ul>
        </div>
    )
}

const Schedule = () => {
    return ( 
        <a className={nav.schedule} id="schedule_nav" href='https://thecleaningcompany-nyc.setmore.com/services' target="_blank" rel="noopener noreferrer nofollow">
            <h4 className={nav.appText}>Schedule Now</h4>
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