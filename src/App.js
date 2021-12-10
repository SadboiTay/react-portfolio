import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [navSelection, setNavSelection] = useState('about');

  return (
    <Router>
      <div>
        <Header
          navSelection={navSelection}
          setNavSelection={setNavSelection}
        />
        <div className="container">
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </div>
        <Footer navSelection={navSelection} />
      </div>
    </Router>
  );
}

export default App;
