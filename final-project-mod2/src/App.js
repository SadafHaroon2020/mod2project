import React, { useReducer, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Header from './components/Header'
import Movie from './components/Movie'
import About from './components/About'
import Search from './components/Search'
import Contact from './components/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";

const movieNames = ['frozen','maleficent','aladin','zootopia','taken','x-men']
let searchWord = movieNames[Math.floor(Math.random() * movieNames.length)]
const API_KEY = "65525897";
const MOVIE_API_URL = `https://www.omdbapi.com/?s=${searchWord}&apikey=${API_KEY}`;

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
  movieDetails : {},

  appMessage: ""
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
      case "FAV_MOVIES_SUCCESS":
        return {
          ...state,
          loading: false,
          movies: action.payload,
          appMessage: "Sharing a few of our favorite movies"
        };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
        appMessage: `Search results`
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    case "MOVIE_DETAILS_SUCCESS":
      return {
        ...state,
        loading: false,
        movieDetails: action.payload
      };
    case "MOVIE_DETAILS_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios.get(MOVIE_API_URL)
      .then(response => response.data)
      .then(jsonResponse => {

        dispatch({
          type: "FAV_MOVIES_SUCCESS",
          payload: jsonResponse.Search.splice(0,3)
        });
      });
  }, []);

  const details = movieId => {
    dispatch({
      type: "MOVIE_DETAILS_REQUEST"
    });
    axios.get(`https://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}&plot=full`)
      .then(response => response.data)
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "MOVIE_DETAILS_SUCCESS",
            payload: jsonResponse
          });
        } else {
          dispatch({
            type: "MOVIE_DETAILS_FAILURE",
            error: jsonResponse.Error
          });
        }
      });
  };
  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });
    axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}&plot=full`)
      .then(response => response.data)
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search.splice(0,5)
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;

  return (
    <div className="App">
      <div className="nav-bar">
      <Header text="MOVIES COLLECTION" />
      <Search search={search} />
      </div>
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

      
      
  <p className="app-intro">{state.appMessage}</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span className="loader"></span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
              movies.map((movie, index) => (
                <Movie key={`${index}-${movie.Title}`} movie={movie} details={details} />
              ))
            )}
      </div>
    </div>
  );
};

export default App;