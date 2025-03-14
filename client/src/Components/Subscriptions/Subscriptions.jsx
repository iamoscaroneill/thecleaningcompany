/* eslint-disable react/prop-types */
import React from 'react'
import sub from './Subscriptions.module.css'
import { subscriptions } from '../../utils/services'

const Service = ({ service, description, price, index, type, link }) => {
    return (
        <div id={`${type}_${index}`} className={sub.service}>
            <h3 id={`${type}_room_${index}`}>{service}</h3>
            <h4 id={`${type}_desc_${index}`}>{description}</h4>
            <h2 id={`${type}_prices_${index}`}>
                {price}
                <a href={link} target="_blank" rel="noopener noreferrer nofollow">Subscribe</a>
            </h2>
        </div>
    )
}

const Subscriptions = () => {
  return (
    <div id={sub.sub_container}>
        <h1 id="sub_title" className={sub.title}>Subscriptions</h1>

        <div className={sub.packageContainer}>
            <div className={sub.prices}>
                { subscriptions && subscriptions.map((subscription, i) => {
                    return (
                        <Service
                            key={i}
                            index={i}
                            type={"sub"}
                            service={subscription.service}
                            description={subscription.description}
                            price={subscription.price}
                            link={subscription.link}
                        />
                    )
                }) }
            </div>
        </div>
        
    </div>
  )
}

export default Subscriptions