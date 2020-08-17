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


const movieNames = ['frozen','maleficent','aladin','zootopia','taken','x-men']
//randomly selecting favorite movies for rendering on home page
let searchWord = movieNames[Math.floor(Math.random() * movieNames.length)]
//defining API key as constant
const API_KEY = "65525897";
//defining API url as constant
const MOVIE_API_URL = `https://www.omdbapi.com/?s=${searchWord}&apikey=${API_KEY}`;

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
  movieDetails : {},
  appMessage: ""
};

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
