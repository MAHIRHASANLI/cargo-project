import React from 'react'
import Header from './Components/Header'
import HeroSection from './pages/Hero'
import AboutSection from './pages/About'
import ContactSection from './pages/Contact'
import ServicesSection from './pages/Services'
import TestimonialSection from './pages/Testimonial'
import TopFooterSection from './Components/Footer.Top'
import BottomFooterSection from './Components/Footer.bottom'

const App = () => {
  return (
    <>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <TestimonialSection/>
      <ContactSection/>
      <TopFooterSection/>
      <BottomFooterSection/>
    </>
  )
}

export default App