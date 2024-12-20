import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Hero from './components/Hero'
import Footer from './components/Footer'



const App = () => {

  return (
    <div>
      
      <Router>
      <Navbar />

        <Routes>
          <Route path='/' element={<Hero />}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>

      <Footer />
      
      
    </div>
  )
}

export default App;

