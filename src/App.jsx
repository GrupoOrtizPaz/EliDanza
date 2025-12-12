import { useState, useEffect } from 'react'
import TopBanner from './components/layout/TopBanner'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import WhatIsBallet from './components/sections/WhatIsBallet'
import Events from './components/sections/Events'
import Classes from './components/sections/Classes'
import Benefits from './components/sections/Benefits'
import Locations from './components/sections/Locations'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import Loader from './components/ui/Loader'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="app" id="top">
      <TopBanner />
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <WhatIsBallet />
        <Events />
        <Classes />
        <Benefits />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
