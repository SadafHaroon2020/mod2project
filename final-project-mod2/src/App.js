import React from 'react';
import About from './components/About'
import Contact from './components/Contact'
import './App.css';

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
            </div>
            </Router>
            
    </div>
  );
}

export default App;
