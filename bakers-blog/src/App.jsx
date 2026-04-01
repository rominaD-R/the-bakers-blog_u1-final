import { useState } from 'react'
import { Routes, Route } from 'react-router';
import Nav from './components/Nav';
import Home from './pages/Home'
import Search from './pages/Search';
import Types from './pages/Types';
import Footer from './components/Footer';
import { recipeMockData } from './data/recipes'
import './App.css'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/types' element={<Types />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
