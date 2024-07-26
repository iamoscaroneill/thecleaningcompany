/* eslint-disable react/prop-types */
import { useContext } from 'react'
import stuff from './Stuff.module.css'
import { services } from '../../utils/services'
import { AppContext } from '../../Context/AppContext'

const Header = () => {
    return (
        <div className={stuff.header}>
            <h1>Services we currently offer</h1>
        </div>
    )
}

const Services = (props) => {
    return (
        <div className={stuff.serviceTypes}>
            <h3>{props.type}</h3>
            <div className={stuff.serviceOptions}>
                {props.options && props.options.map((options, i) => {
                    return (
                        <h4 key={i}>{options}</h4>
                    )
                })}
            </div>
        </div>
    )
}

const Disclaimer = () => {
    return (
        <h3 className={stuff.disclaimer}>
            {'Please be advised that our residential cleaning services for kitchen, bathroom, living room, and bedroom, etc. are billed separately, allowing you to customize your cleaning experience. We believe in transparent pricing and are happy to assist with any questions or specific service combinations.'}
            <br/>
            {/* {Place paragraph below into new disclaimer component outside of this...} */}
            {/* {"We strive to offer a wide variety of professional cleaning services to meet all of our customers' needs. However, we recognize that we may not have every service you're looking for listed on our website. If you don't see a specific cleaning service you require, please don't hesitate to contact us. We would be more than happy to discuss providing any cleaning service that would help make your life easier and keep your residence clean. We aim to be your one-stop cleaning solution, so please reach out if you need a cleaning service that you don't see on our site. Our goal is 100% customer satisfaction, and we encourage you to contact us so we can work together to meet your unique cleaning needs."} */}
        </h3>
    )
}

const Stuff = () => {
    const {serviceRef} = useContext(AppContext)
    return (
        <div ref={serviceRef} id="services" className={stuff.container}>
            <Header/>
            <div className={stuff.serviceContainer}>
                {services && services.map((service, i) => (
                    <Services
                        key={i}
                        type={service.type}
                        options={service.options}
                    />
                ))}
            </div>
            <Disclaimer/>
        </div>
    )
}

export default Stuff