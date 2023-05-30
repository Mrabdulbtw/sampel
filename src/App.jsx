
import './App.css'
import React from 'react'
import Nav from './componet/nav'
import Home from './pages/home'
import Select from './pages/select'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {


  return (


    <Router basename='/sampel'>
      <Nav />
      <Routes >
        <Route path='/sampel' element={<Home />} />
        <Route path='/select' element={<Select />} />
        <Route />
      </Routes>
    </Router>



  )
}

export default App
