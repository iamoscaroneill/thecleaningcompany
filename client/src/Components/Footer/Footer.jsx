import footer from './Footer.module.css'
import { blob } from '../../utils/photos'
import { links } from '../../utils/links'

const Main = () => {
    return (
        <a href='/' id="home_footer" className={footer.main}>
            <img className={footer.logo} src={blob.purple} alt='logo'/>
            <h2 className={footer.title}>The Cleaning Company</h2>
        </a>
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
        <div id="phone_number" className={footer.phone}>
            <h4>Text us!</h4>
            <h4>929-548-2828</h4>
        </div>
    )
}

const Hours = () => {
    return (
        <div id="operation_hours" className={footer.hours}>
            <h4>Hours</h4>
            <p>Mon-Sat: 9 AM - 5 PM</p>
        </div>
    )
}

const Terms = () => {
    return (
        <a id="terms_footer" className={footer.terms} href={links[2].link} target='_blank' rel="noreferrer">{links[2].type} &nbsp; <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
    )
}

const Booking = () => {
    return (
        <a className={footer.booking} id="schedule_footer" href='https://calendar.google.com/calendar/appointments/AcZssZ3woW5iCWUfa6-zevyaI4M2pPY6u95m9amEMr8=?gv=true' target="_blank" rel="noopener noreferrer nofollow">
            <h5>Schedule Now</h5>
        </a>
    )
}

const Copyright = () => {
    return (
        <div id="copyright_footer" className={footer.copyright}>© 2025 The Cleaning Company of New York, LLC</div>
    )
}

const Footer = () => {
  return (
    <div id="footer" className={footer.container}>
        <Main/>
        <div className={footer.contact}>
            <Email/>
            <Phone/>
            <Hours/>
            <Terms/>
            <Booking/>
        </div>
        <Copyright/>
    </div>
  )
}

export default Footer