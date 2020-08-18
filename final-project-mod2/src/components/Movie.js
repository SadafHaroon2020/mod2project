import React, {useState} from 'react'

const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

function showMovieDetails(movieTitle, movieYear) {
  let movieDetails = `Movie '${movieTitle}' was release in year ${movieYear}.`;
  alert(movieDetails)
}

const  Movie = (props) => {
  let {movie, details} = props;
  const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie" onClick={() => showMovieDetails(movie.Title, movie.Year)}>
      <p>{movie.Title}</p>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
    </div>
  )
}

export default Movie