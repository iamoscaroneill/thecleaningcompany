/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import areas from './Areas.module.css'
import { photos } from '../../utils/photos'

const Header = () => {
    return (
        <div className={areas.header}>
            <h1 id="areas_header">Where we service</h1>
        </div>
    )
}

const Details = (props) => {
    return (
        <div data-borough-name={props.borough} className={areas.details}>
            <div className={areas.imageContainer}>
                <img src={props.image}/>
            </div>
            <div className={areas.borough}>
                <h3>{props.borough}</h3>
            </div>
        </div>
    )
}

const Disclaimer = () => {
    return (
        <h3 id="disclaimer" className={areas.disclaimer}>
            {`While we strive to accommodate as many clients as we can, please note that an additional service fee may apply for locations beyond our normal service radius. This fee is implemented to cover the extra travel time and resources required to ensure our commitment to quality service. We encourage you to contact us for more information regarding services in your specific location.`}
            {/* <br/><br/> */}
            {/* {`* Nassau County, Long Island service begins Fall/Winter 2024.`} */}
        </h3>
    )
}

const Areas = () => {
    const {areaRef} = useContext(AppContext)

    return (
        <div ref={areaRef} id="areas" className={areas.container}>
            <Header/>
            <div id="details_container" className={areas.detailsContainer}>
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