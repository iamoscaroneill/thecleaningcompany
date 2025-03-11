/* eslint-disable react/prop-types */
import { useContext } from 'react'
import types from './ServiceTypes.module.css'
import { services } from '../../utils/services'
import { AppContext } from '../../Context/AppContext'

const Header = () => {
    return (
        <div className={types.header}>
            <h1 id="service_header">Services we currently offer</h1>
        </div>
    )
}

const Services = (props) => {
    return (
        <div id={`service_${props.index}`} className={types.serviceTypes}>
            <img className={types.images} src={props.image} />

            <h3 id={`serviceTitle_${props.index}`}>{props.type}</h3>

            <div id={`option_${props.index}`} className={types.serviceOptions}>
                <h4 data-cleaning-option={props.options}>{props.options}</h4>
            </div>
        </div>
    )
}

const Disclaimer = () => {
    return (
        <h3 id="service_disclaimer" className={types.disclaimer}>
            {'Please be advised that our residential cleaning services for kitchen, bathroom, living room, and bedroom, etc. are billed separately, allowing you to customize your cleaning experience. We believe in transparent pricing and are happy to assist with any questions or specific service combinations.'}
            <br/>
            {/* {Place paragraph below into new disclaimer component outside of this...} */}
            {/* {"We strive to offer a wide variety of professional cleaning services to meet all of our customers' needs. However, we recognize that we may not have every service you're looking for listed on our website. If you don't see a specific cleaning service you require, please don't hesitate to contact us. We would be more than happy to discuss providing any cleaning service that would help make your life easier and keep your residence clean. We aim to be your one-stop cleaning solution, so please reach out if you need a cleaning service that you don't see on our site. Our goal is 100% customer satisfaction, and we encourage you to contact us so we can work together to meet your unique cleaning needs."} */}
        </h3>
    )
}

const ServiceTypes = () => {
    const {serviceRef} = useContext(AppContext)
    return (
        <div ref={serviceRef} id="services" className={types.container}>
            <Header/>
            <div className={types.serviceContainer}>
                {services && services.map((service, i) => (
                    <Services
                        key={i}
                        index={i}
                        type={service.type}
                        options={service.options}
                        image={service.image}
                    />
                ))}
            </div>
            <Disclaimer/>
        </div>
    )
}

export default ServiceTypes