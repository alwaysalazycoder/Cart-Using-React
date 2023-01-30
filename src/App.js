import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header.jsx'
import Men from './components/Men'
import "./styles/main.css"
import { Toaster } from 'react-hot-toast'
import Cart from './components/Cart'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App  