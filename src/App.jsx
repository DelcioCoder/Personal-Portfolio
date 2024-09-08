import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

export default function App() {
  return (
    <div>
      <NavBar />

      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="portfolio">
         <Portfolio />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  )
}
