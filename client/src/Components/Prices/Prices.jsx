/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import prices from './Prices.module.css'
import { pricing, specials } from '../../utils/services'

const Services = ({service, description, price, index, type}) => {
    return (
        <div id={`${type}_${index}`} className={prices.service}>
            <h3 id={`${type}_room_${index}`}>{service}</h3>
            <h4 id={`${type}_desc_${index}`}>{description}</h4>
            <h2 id={`${type}_prices_${index}`}>{price}</h2>
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
                            <Services
                                key={i}
                                index={i}
                                type={"main"}
                                service={special.service}
                                description={special.description}
                                price={special.price}
                            />
                        )
                    }) }
                </div>
            </div>


            <h1 id="addtl_service_title" className={prices.title}>Additional Services</h1>
            <div className={prices.pricingContainer}>
                <div className={prices.prices}>
                    { pricing && pricing.map((prices, i) => {
                    return (
                        <Services 
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