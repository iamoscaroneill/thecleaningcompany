import footer from './Footer.module.css'
import { blob } from '../../utils/photos'
import { links } from '../../utils/links'

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
            <h4>Please, contact us!</h4>
            <h4>929-548-2828</h4>
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

const Terms = () => {
    return (
        <div>
            <a className={footer.terms} href={links[2].link} target='_blank' rel="noreferrer">{links[2].type} &nbsp; <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
    )
}

const Booking = () => {
    return (
        <a className={footer.booking} href='https://thecleaningcompany-nyc.setmore.com/services' target="_blank" rel="noopener noreferrer nofollow">
            <h5>Schedule Now<i className="fa-regular fa-clock"></i></h5>
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
            <Terms/>
            <Booking/>
            <Copyright/>
        </div>
    </div>
  )
}

export default Footer