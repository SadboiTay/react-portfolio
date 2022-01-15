import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [navSelection, setNavSelection] = useState('about');

  return (
    <Router>
      <div className='main-wrap'>
        <Header
          navSelection={navSelection}
          setNavSelection={setNavSelection}
        />
        <div className="container">
          {/* <Switch>
            <Route exact path="/react-portfolio" component={About} />
            <Route exact path="/react-portfolio/about" component={About} />
            <Route exact path="/react-portfolio/portfolio" component={Portfolio} />
            <Route exact path="/react-portfolio/contact" component={Contact} />
            <Route exact path="/react-portfolio/resume" component={Resume} />
          </Switch> */}
          {navSelection === 'about' && <About />}
          {navSelection === 'portfolio' && <Portfolio />}
          {navSelection === 'contact' && <Contact />}
          {navSelection === 'resume' && <Resume />}
        </div>
      </div>
      <Footer navSelection={navSelection} />
    </Router>
  );
}

export default App;