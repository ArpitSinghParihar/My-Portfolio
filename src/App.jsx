import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import ContactMe from './Components/ContactMe/ContactMe'
import Footer from './Components/Footer/Footer'
import Resume from './Components/Resume/Resume'
import './App.css'

const App = () => {
  return (
    <div className='main-container'>
      <Navbar/>
      <Hero/>
      <About/>
      <Resume/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App
