import footer from './Footer.module.css'
import { blob } from '../../utils/photos'

const Main = () => {
    return (
        <div className={footer.main}>
            <img className={footer.logo} src={blob.purple} alt='logo'/>
            <h2 className={footer.title}>The Cleaning Company</h2>
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
            <a href='tel:3477094307'><h4>(347) 709-4307</h4></a>
        </div>
    )
}

const Booking = () => {
    return (
        <div className={footer.booking}>
            <h4>Book Now <i className="fa-solid fa-calendar-plus"></i></h4>
        </div>
    )
}

const Footer = () => {
  return (
    <div className={footer.container}>
        <Main/>
        <div className={footer.contact}>
            <Email/>
            <Phone/>
            <Booking/>
        </div>
    </div>
  )
}

export default Footer