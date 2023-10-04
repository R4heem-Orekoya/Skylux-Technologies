import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Tools from './Tools'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Backtotop from './Backtotop'
import Features from './Features'
import Testimonials from './Testimonials'

const App = () => {
  return (
    <div className='w-full font-poppins'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tools />
      <Features />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <Backtotop />
    </div>
  )
}

export default App

