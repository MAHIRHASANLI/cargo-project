import React from 'react'
import Header from './Components/Header'
import HeroSection from './Components/Hero'
import AboutSection from './Components/About'
import ContactSection from './Components/Contact'
import ServicesSection from './Components/Services'
import TestimonialSection from './Components/Testimonial'
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