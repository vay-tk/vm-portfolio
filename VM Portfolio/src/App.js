import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '../src/styles/index.css';
import RecentWork from './components/RecentWork';
import MoreCreations from './components/MoreCreations';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <RecentWork/>
      <MoreCreations/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;