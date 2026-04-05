import { useState } from 'react'
import { Routes, Route } from 'react-router';
import Nav from './components/Nav';
import Home from './pages/Home'
import Search from './pages/Search';
import Types from './pages/Types';
import About from './pages/About';
import Footer from './components/Footer';
import IndividualRecipe from './pages/IndividualRecipe';
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
        <Route path='/about' element={<About />} />
        <Route path="recipe/:id" element={<IndividualRecipe />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
