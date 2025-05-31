import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import EnterpriseBanner from './EnterpriseBanner'
import HowItWorks from './HowItWorks'
import Categories from './Categories'
import Testimonials from './Testimonials'
import Benefits from './Benefits'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <HowItWorks />
    <EnterpriseBanner />
    <Categories />
    <Benefits/>
    <Testimonials />
    <Footer />
    
    </>
  )
}

export default Home