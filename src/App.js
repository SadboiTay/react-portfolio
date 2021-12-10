import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [navSelection, setNavSelection] = useState('about');

  return (
    <div>
      <Header
        navSelection={navSelection}
        setNavSelection={setNavSelection}
      />
      {navSelection === 'about' && <About />}
      {navSelection === 'portfolio' && <Portfolio />}
      {navSelection === 'contact' && <Contact />}
      {navSelection === 'resume' && <Resume />}
      <Footer navSelection={navSelection} />
    </div>
  );
}

export default App;
