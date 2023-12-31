import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './components/Login'
import CardLineChart from './components/Chart'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import { Button } from '@material-tailwind/react'
import { ComplexNavbar } from './components/Navbar'
import Statistic from './components/Statistic'
import Stats from './container/Stats'
import Home from './container/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
