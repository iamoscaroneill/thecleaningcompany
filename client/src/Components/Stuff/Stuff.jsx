/* eslint-disable react/prop-types */
import stuff from './Stuff.module.css';
import { services } from '../../utils/services';

const Title = () => {
    return (
        <div className={stuff.title}>
            <h1>Services</h1>
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
                        <h3 key={i}>{options}</h3>
                    )
                })}
            </div>
        </div>
    )
}

const Disclaimer = () => {
    return (
        <h3 className={stuff.disclaimer}>
            {'Please be advised that our residential cleaning services for kitchen, bathroom, living room, and bedroom are billed separately, allowing you to customize your cleaning experience. We believe in transparent pricing and are happy to assist with any questions or specific service combinations.'}
        </h3>
    )
}

const Stuff = () => {
    return (
        <div className={stuff.container}>
            <Title/>
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