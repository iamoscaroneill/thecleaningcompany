import footer from './Footer.module.css'
import { blob } from '../../utils/photos'

const Main = () => {
    return (
        <div className={footer.main}>
            <img className={footer.logo} src={blob.purple} alt='logo'/>
            <a href='/'><h2 className={footer.title}>The Cleaning Company</h2></a>
        </div>
    )
}

const Email = () => {
    return (
        <div className={footer.email}>
            <h4>Email</h4>
            <a href='mailTo:contact@thecleaningcompany.xyz'><h4>contact@thecleaningcompany.xyz</h4></a>
        </div>
    )
}

const Phone = () => {
    return (
        <div className={footer.phone}>
            <h4>Call</h4>
            <a href='tel:3472484247'><h4>347-248-4247</h4></a>
        </div>
    )
}

const Hours = () => {
    return (
        <div className={footer.hours}>
            <h4>Hours</h4>
            <p>Mon-Fri: 9 AM - 4PM</p>
            <p>Sat: 10 AM - 3PM</p>
        </div>
    )
}

const Booking = () => {
    return (
        <a className={footer.booking} href='https://thecleaningcompany-nyc.setmore.com/services' target="_blank" rel="noopener noreferrer nofollow">
            <h5>Book Now <i className="fa-solid fa-calendar-plus"></i></h5>
        </a>
    )
}

const Copyright = () => {
    return (
        <div className={footer.copyright}>Copyright © 2024 The Cleaning Company of New York, LLC</div>
    )
}

const Footer = () => {
  return (
    <div className={footer.container}>
        <Main/>
        <div className={footer.contact}>
            <Email/>
            <Phone/>
            <Hours/>
            <Booking/>
            <Copyright/>
        </div>
    </div>
  )
}

export default Footer