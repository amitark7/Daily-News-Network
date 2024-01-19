import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Headers from './component/Headers'
import Footer from './component/Footer'
import './App.css'
import News from './component/News'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Headers />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
