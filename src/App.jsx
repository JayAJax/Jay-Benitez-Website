import React, { useState } from 'react'
import HeroSection from './Components/HeroSection/HeroSection'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  // Move the state here so ALL components can see it
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <div>
      {/* Pass the state and the toggle function to the Hero */}
      <HeroSection isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Pass the state to Services so it knows to change color */}
      <Services isDarkMode={isDarkMode} />
      <Portfolio isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode}/>
      
    </div>
  )
}

export default App