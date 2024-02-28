import { useContext } from 'react';
import nav from './Navigation.module.css';
import { AppContext } from '../../Context/AppContext';


const Title = () => {
    return (
        <div className={nav.title}>
            <h2><a href='/'>The Cleaning Company</a></h2>
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

const Appointment = () => {
    return ( 
        <a className={nav.appointment} href='https://thecleaningcompany-nyc.setmore.com/' target="_blank" rel="noopener noreferrer nofollow">
            <h4 className={nav.appText}>Book Now</h4>
            <i className="fa-solid fa-calendar-plus"></i>
        </a>
    )
}

const Navigation = () => {
  return (
    <div className={nav.container}>
        <MenuButton/>
        <Title/>
        <Appointment/>
    </div>
  )
}

export default Navigation