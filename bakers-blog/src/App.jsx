import { useState } from 'react'
import { Routes, Route } from 'react-router';
import Nav from './components/Nav';
import Home from './pages/Home'
import Search from './pages/Search';
import Types from './pages/Types';
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

    </>
  )
}

export default App
