import './App.css'
import Home from './PortfolioContainer/Home/Home'
import AboutMe from './PortfolioContainer/AboutMe/AboutMe'
import Skills from './PortfolioContainer/Skills/Skills'
import Contact from './PortfolioContainer/ContactMe/Contact'
import Navbar from './PortfolioContainer/Navbar/Navbar'

function App() {
  return (
  <div className='App-container'>
    <Navbar />
    <Home />
    <AboutMe />
    <Skills />
    <Contact />
  </div>
  )
}

export default App
