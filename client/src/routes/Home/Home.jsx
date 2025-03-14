import Introduction from '../../Components/Introduction/Introduction'
import Areas from '../../Components/Areas/Areas'
import ServiceTypes from '../../Components/ServiceTypes/ServiceTypes'
import Prices from '../../Components/Prices/Prices'
import Contact from '../../Components/Contact/Contact'
import Marketing from '../../Components/Marketing/Marketing'
import Footer from '../../Components/Footer/Footer'
import home from './Home.module.css'
import About from '../../Components/About/About'
import Subscriptions from '../../Components/Subscriptions/Subscriptions'

const Home = () => {
    return (
        <div className={home.container}>
            <Introduction/>
            <Marketing/>
            <Areas/>
            <ServiceTypes/>
            <Prices/>
            <Subscriptions/>
            <Contact/>
            <About/>
            <Footer/>
        </div>
    )
}

export default Home