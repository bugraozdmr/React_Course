import {Route,Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Menu from './components/Menu'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/menu'} element={<Menu />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/about'} element={<About />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
