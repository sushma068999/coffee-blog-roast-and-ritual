import { Navbar } from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx'
import { Cards } from './components/Cards.jsx'
import { Timeline } from './components/Timeline.jsx'
import { EditorsPicks } from './components/EditorsPicks.jsx'
import { Banner } from './components/Banner.jsx'
import { Footer } from './components/Footer.jsx'

import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Cards/>
    <Timeline/>
    <EditorsPicks/>
    <Banner/>
    <Footer/>
    </>
  )
}

export default App
