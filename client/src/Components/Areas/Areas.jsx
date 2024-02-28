/* eslint-disable react/prop-types */
import areas from './Areas.module.css'
import { photos } from '../../utils/photos'

const Title = () => {
    return (
        <div className={areas.title}>
            <h1>Areas of Service</h1>
        </div>
    )
}

const Details = (props) => {
    return (
        <div className={areas.details}>
            <div className={areas.imageContainer}>
                <img src={props.image}/>
            </div>
            <div className={areas.borough}>
                {props.borough}
            </div>
        </div>
    )
}

const Disclaimer = () => {
    return (
        <h3 className={areas.disclaimer}>
            {`While we strive to accommodate as many clients as we can, please note that an additional service fee may apply for locations beyond our normal service radius. This fee is implemented to cover the extra travel time and resources required to ensure our commitment to quality service. We encourage you to contact us for more information regarding services in your specific location.`}
        </h3>
    )
}

const Areas = () => {
    return (
        <div id="#areas" className={areas.container}>
            <Title/>
            <div className={areas.detailsContainer}>
                {photos && photos.map((photo, i) => (
                    <Details
                        key={i}
                        image={photo.image}
                        borough={photo.borough}
                    />
                ))}
            </div>
            <Disclaimer/>
        </div>
    )
}

export default Areas