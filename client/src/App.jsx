import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'
import Menu from './Components/Menu/Menu'
import Home from './routes/Home/Home';
import Prices from './routes/Prices/Prices';
import Contact from './routes/Contact/Contact';

const App = () => {
  return (
    <div className='app'>
      <Navigation/>
      <Menu/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pricing' element={<Prices/>}/>
          <Route path='/contactus' element={<Contact/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
