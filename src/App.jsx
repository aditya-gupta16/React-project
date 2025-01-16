import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
// import Register from './components/Register'

const App = () => {
  //  useEffect(()=>{
  //   console.log('Component Mounted')

  //   return()=>{
  //     console.log('Component Unmounted')
  //     // cleanup code here (e.g., cancel subscriptions, clear timers)
  //   }
  // },[])

  // useEffect(()=>{
  //   alert("Welcome")
  // })

  return (
    <div>
      
      <Router>
        <Navbar />
        <>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>

        
        <Footer />
      </Router>
      
    </div>
  );
};

export default App;
