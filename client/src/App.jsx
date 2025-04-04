import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import Menu from './Components/Menu/Menu'
import Home from './routes/Home/Home'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { inject } from '@vercel/analytics';
import { StatsigProvider, useClientAsyncInit } from '@statsig/react-bindings';
import { StatsigAutoCapturePlugin } from '@statsig/web-analytics';
import { StatsigSessionReplayPlugin } from '@statsig/session-replay';

const App = () => {
  inject()

  const statSigKEY = import.meta.env.VITE_STATSIG_KEY;

  const { client } = useClientAsyncInit(
    `client-${statSigKEY}`,
    { userID: 'a-user' },
    { plugins: [new StatsigAutoCapturePlugin(), new StatsigSessionReplayPlugin()] },
  );

  return (
    <StatsigProvider client={client} loadingComponent={<div>Loading...</div>}>
      <div className='app'>
        <Navigation/>
        <Menu/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        <SpeedInsights/>
      </div>
    </StatsigProvider>
  )
}

export default App
