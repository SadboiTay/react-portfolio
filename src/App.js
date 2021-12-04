import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  const [navSelection, setNavSelection] = useState('portfolio');

  return (
    <div>
      <Header
        navSelection={navSelection}
      />
      {navSelection === 'about' && <About />}
      {navSelection === 'portfolio' && <Portfolio />}
    </div>
  );
}

export default App;
