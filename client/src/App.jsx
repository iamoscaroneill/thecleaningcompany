import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'
import Menu from './Components/Menu/Menu'
import Home from './routes/Home/Home'

const App = () => {
  return (
    <div className='app'>
      <Navigation/>
      <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
