import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header.jsx'
import Men from './components/Men'
import "./styles/main.css"

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/men' element={<Men/>} />
      </Routes>
    </Router>
  )
}

export default App  