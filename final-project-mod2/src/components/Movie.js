import React from 'react'

const DEFAULT_PLACEHOLDER_IMAGE = "https://lh3.googleusercontent.com/proxy/jhdKyQ2YNNqhqa9Cfcr2on4_xeTJyPbYp_TavsDrMB93BtRvGnSDkQE5ngiuD6MHpzMHHBro51bhw4E7cpLL6yLaTQ1nOD-g";

function showMovieDetails(movieTitle, movieYear) {
  let movieDetails = `Movie '${movieTitle}' was release in year ${movieYear}.`;
  alert("MOVIE DETAILS: " + "\n"
    + "\n"
    + movieDetails);
}

const Movie = (props) => {
  let { movie, details } = props;
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