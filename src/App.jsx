import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Resume from './components/resume/Resume'
// import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App = () => {
  return (
    <>

    <Header />
    <About />
    <Resume />
    {/* <Services /> */}
    <Portfolio />
    <Contact />
    <Footer />
    <ScrollToTop />
    </>
  )
}

export default App