import React from "react";

const MovieList = (props) => {
  const { FavouriteComponent, movies, handleFavouritesClick } = props;
  return (
    <>
      {movies && movies.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-start m-3"
          style={{ width: "17%" }}
        >
          <img src={movie.Poster} alt="movie"></img>
          <div
            className="overlay d-flex align-items-center justify-content-center"
            style={{ width: "93%" }}
            onClick={() => handleFavouritesClick(movie)}
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
