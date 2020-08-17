import React from 'react';
import About from './components/About'
import Contact from './components/Contact'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <div className="nav-bar">
      <Router>
          <div className='nav-route'>
            <nav>
              <ul className='list'>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>
            </nav>
   
            <Switch>
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
            </Switch>
            <Header text="MOVIES COLLECTION" />
            </div>
            </Router>
            </div>
    </div>
  );
}

export default App;
