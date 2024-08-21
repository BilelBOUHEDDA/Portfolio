import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import './styles/styles.css'; 
import ScrollToTop from './ScrollToTop';
import Particle from './components/Particles';

import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';
import Project5 from './pages/Project5';
import Project6 from './pages/Project6';
import Project7 from './pages/Project7';
import Project8 from './pages/Project8';
import Project9 from './pages/Project9';
import Project10 from './pages/Project10';
import Project11 from './pages/Project11';

const App = () => {
  return (
    <Router>
        
        <ScrollToTop />
        <div className="App">
          
          <Navbar />
          <div className='App-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
            <Route path="/project-details/1" element={<Project1 />} />
            <Route path="/project-details/2" element={<Project2 />} />
            <Route path="/project-details/3" element={<Project3 />} />
            <Route path="/project-details/4" element={<Project4 />} />
            <Route path="/project-details/5" element={<Project5 />} />
            <Route path="/project-details/6" element={<Project6 />} />
            <Route path="/project-details/7" element={<Project7 />} />
            <Route path="/project-details/8" element={<Project8 />} />
            <Route path="/project-details/9" element={<Project9 />} />
            <Route path="/project-details/10" element={<Project10 />} />
            <Route path="/project-details/11" element={<Project11 />} />
          <Route path="/about" element={<About />} /> 
        </Routes>
      </div>
      </div>
    </Router>
  );
};

export default App;