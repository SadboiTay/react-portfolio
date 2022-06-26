import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

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