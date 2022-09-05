import React from 'react' ;
import Navigation from './Components/Navigation'; 
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import './assets/index.css';

function App() {
  return (
    <Router>
      <Navigation  />
      
      
      
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/services" element={<Services />}> </Route>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/contact" element={<Contact />}> </Route>
      </Routes>
    </Router>
  )
  
}

export default App;


