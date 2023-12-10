import './App.css'
import Navigation from './Components/Navigation/Navigation'
import Introduction from './Components/Introduction/Introduction'
import Areas from './Components/Areas/Areas'
import Stuff from './Components/Stuff/Stuff'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navigation/>
      <Introduction/>
      <Areas/>
      <Stuff/>

      <Footer/>
    </div>
  )
}

export default App
