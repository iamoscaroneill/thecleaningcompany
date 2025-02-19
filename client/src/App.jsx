import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import Menu from './Components/Menu/Menu'
import Home from './routes/Home/Home'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { inject } from '@vercel/analytics';

const App = () => {
  inject()
  return (
    <div className='app'>
      <Navigation/>
      <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      <SpeedInsights/>
    </div>
  )
}

export default App
