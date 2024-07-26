import Introduction from '../../Components/Introduction/Introduction'
import Areas from '../../Components/Areas/Areas'
import Stuff from '../../Components/Stuff/Stuff'
import Prices from '../../Components/Prices/Prices'
import Contact from '../../Components/Contact/Contact'
import Marketing from '../../Components/Marketing/Marketing'
import Footer from '../../Components/Footer/Footer'
import home from './Home.module.css'

const Home = () => {
    return (
        <div className={home.container}>
            <Introduction/>
            <Marketing/>
            <Areas/>
            <Stuff/>
            <Prices/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home