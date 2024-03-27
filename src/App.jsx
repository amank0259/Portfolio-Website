import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import TSParticles from "./components/TSParticles"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="w-full">
      <TSParticles />
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
