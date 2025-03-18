/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import prices from './Prices.module.css'
import { pricing, specials } from '../../utils/services'

const Service = ({service, description, price, index, type, link}) => {
    return (
        <div id={`${type}_${index}`} className={prices.service}>
            <h3 id={`${type}_room_${index}`}>{service}</h3>
            <h4 id={`${type}_desc_${index}`}>{description}</h4>
            <h2 id={`${type}_prices_${index}`}>
                {price}
                { link ? <a href={link} target="_blank" rel="noopener noreferrer nofollow">Schedule</a> : "" }
            </h2>
        </div>
    )
}

const Prices = () => {
    const {priceRef} = useContext(AppContext)

    return (
        <div ref={priceRef} className={prices.container} id="pricing">
            <h1 id="package_title" className={prices.title}>Packages</h1>
            
            <div className={prices.packageContainer}>
                <div className={prices.prices}>
                    { specials && specials.map((special, i) => {
                        return (
                            <Service
                                key={i}
                                index={i}
                                type={"main"}
                                service={special.service}
                                description={special.description}
                                price={special.price}
                                link={special.link}
                            />
                        )
                    }) }
                </div>
            </div>


            <h1 id={prices.addtl_service_title} className={prices.title}>Additional Services</h1>
            <div id={prices.disclaimer}>
                <h4>Please email or text us about the services below for a personalized consultation and invoice.</h4>
            </div>
            <div className={prices.pricingContainer}>
                <div className={prices.prices}>
                    { pricing && pricing.map((prices, i) => {
                    return (
                        <Service 
                            key={i} 
                            index={i}
                            type={"secondary"}
                            service={prices.service}
                            description={prices.description}
                            price={`${prices.price}`}
                        />
                    )
                    }) }
                </div>
            </div>

        </div>
  )
}

export default Prices