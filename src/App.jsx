import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Smallhero from './Components/Smallhero/Smallhero'
import Selling from './Components/Selling/Selling'
import Footer from './Components/Footer/Footer'
import Testimonial from './Components/Testimonials/Testimonial'
import Testimonial2 from './Components/Testimonial2/Testimonial2'
import Latest from './Components/Latest/Latest'
import Newsletter from './Components/Newsletter/Newsletter'

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Smallhero />
      <Selling />
      <Testimonial />
      <Testimonial2 />
      <Latest />
      <Newsletter />
      <Footer />
    </div>
  )
}




export default App
