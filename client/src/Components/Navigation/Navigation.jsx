import { useContext } from 'react';
import { blob } from '../../utils/photos';
import nav from './Navigation.module.css';
import { AppContext } from '../../Context/AppContext';
import { useStatsigClient } from "@statsig/react-bindings";


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
    const { client } = useStatsigClient();
    const handleClick = () => client.logEvent("mobile_menu", "Navigation Bar");
    
    return (
        <div id="menu_button" ref={menuRef} className={nav.menuButton} onClick={() => { showMenu(); handleClick() }}>
            <i className="fa-solid fa-bars"></i>
            <h4 className={nav.menuText}>Menu</h4>
        </div>
    )
}

const LinkPlatter = () => {
    const { serviceRef, priceRef } = useContext(AppContext);
    const { client } = useStatsigClient();
    const handleClickServices = () => client.logEvent("services_nav", "Navigation Bar");
    const handleClickPricing = () => client.logEvent("pricing_nav", "Navigation Bar");
    const handleClickContact = () => client.logEvent("contact_nav", "Navigation Bar");

    return (
        <div className={nav.platter}>
            <ul>
                <li><a id="services_nav" href="#services" onClick={() => { serviceRef.current?.scrollIntoView({ behavior: 'smooth' }); handleClickServices() }}>Services</a></li>
                <li><a id="pricing_nav" href="#pricing" onClick={() => { priceRef.current?.scrollIntoView({ behavior: 'smooth' }); handleClickPricing() }}>Pricing</a></li>
                <li><a id="contact_nav" href="#contact" onClick={() => { serviceRef.current?.scrollIntoView({ behavior: 'smooth' }); handleClickContact() }}>Contact Us</a></li>
            </ul>
        </div>
    )
}

const Schedule = () => {
    const { client } = useStatsigClient();
    const handleClick = () => client.logEvent("schedule_nav", "Navigation Bar");

    return ( 
        <a className={nav.schedule} onClick={() => handleClick()} id="schedule_nav" href='https://calendar.google.com/calendar/appointments/AcZssZ3woW5iCWUfa6-zevyaI4M2pPY6u95m9amEMr8=?gv=true' target="_blank" rel="noopener noreferrer nofollow">
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