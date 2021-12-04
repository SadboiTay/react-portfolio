import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';

function App() {
  const [navSelection, setNavSelection] = useState('portfolio');

  return (
    <div>
      <Header
        navSelection={navSelection}
      />
      {navSelection === 'about' && <About />}
    </div>
  );
}

export default App;
