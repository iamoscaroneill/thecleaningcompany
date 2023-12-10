import nav from './Navigation.module.css'

const Title = () => {
    return (
        <div className={nav.title}>
            <h2>The Cleaning Company</h2>
        </div>
    )
}

const MenuButton = () => {
    return (
        <div className={nav.menuButton}>
            <i className="fa-solid fa-bars"></i>
            <h4 className={nav.menuText}>Menu</h4>
        </div>
    )
}

const Appointment = () => {
    return ( 
        <div className={nav.appointment}>
            <h4 className={nav.appText}>Book Now</h4>
            <i className="fa-solid fa-calendar-plus"></i>
        </div>
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