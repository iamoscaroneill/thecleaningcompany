/* eslint-disable react/prop-types */
import prices from './Prices.module.css'
import { pricing, specials} from '../../utils/services'

const Services = ({ service, description, price }) => {
    return (
        <div className={prices.service}>
            <h3>{service}</h3>
            <h5>{description}</h5>
            <h2>{price}</h2>
        </div>
    )
}

const Prices = () => {
  return (
    <div className={prices.container}>
        <div className={prices.pricingContainer}>
            <h2>Prices</h2>
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
        
        <div className={prices.packageContainer}>
            <h2>Packages and Specials</h2>
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