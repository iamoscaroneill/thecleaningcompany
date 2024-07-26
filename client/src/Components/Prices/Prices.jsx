/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import prices from './Prices.module.css'
import { pricing, specials } from '../../utils/services'

const Services = ({service, description, price}) => {
    return (
        <div className={prices.service}>
            <h3>{service}</h3>
            <h4>{description}</h4>
            <h2>{price}</h2>
        </div>
    )
}

const Prices = () => {
    const {priceRef} = useContext(AppContext)

    return (
        <div ref={priceRef} className={prices.container} id="pricing">
            <h1 className={prices.title}>Prices</h1>

            <div className={prices.pricingContainer}>
                <div className={prices.prices}>
                    { pricing && pricing.map((prices, i) => {
                    return (
                        <Services 
                            key={i} 
                            service={prices.service}
                            description={prices.description}
                            price={`Starting at ${prices.price}`}
                        />
                    )
                    }) }
                </div>
            </div>
            
            <h1 className={prices.title}>Packages and Specials</h1>
            <div className={prices.packageContainer}>
                <div className={prices.prices}>
                    { specials && specials.map((special, i) => {
                        return (
                            <Services
                                key={i}
                                service={special.service}
                                description={special.description}
                                price={special.price}
                            />
                        )
                    }) }
                </div>
            </div>
        </div>
  )
}

export default Prices