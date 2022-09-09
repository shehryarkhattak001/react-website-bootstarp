import React from 'react';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import ServicesPage from './Components/ServicesPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/index.css';
import FAQ from './Components/FAQ';
import Privacyndpolicy from './Components/Privacyndpolicy';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/services" element={<Services />}> </Route>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/contact" element={<Contact />}> </Route>
        <Route path="/servicesPage" element={<ServicesPage />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/privacyndpolicy" element={<Privacyndpolicy />}></Route>
      </Routes>
    </Router>
  )

}

export default App;


