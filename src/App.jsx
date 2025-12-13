import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Roadmap from './sections/Roadmap';
import Projects from './sections/Projects';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Roadmap />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
