import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { BrowserRouter as Router, Outlet, Route } from 'react-router-dom';

function App() {
  const [navSelection, setNavSelection] = useState('about');

  return (
    <>
      <div className='main-wrap'>
        <Header
          navSelection={navSelection}
          setNavSelection={setNavSelection}
        />
        <div className="container">
          <Outlet />
        </div>
      </div>
      <Footer navSelection={navSelection} />
    </>
  );
}

export default App;