import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { moviesActions } from "../reducers/MoviesReducer";

export default function MoviesPage() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const deleteMovie = (id) => {
    dispatch(moviesActions.deleteMovie(id));
  };

  return (
    <div>
      <h1>Movies Page</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}
            <br />
            {movie.year}
            <br />
            <Link to={`/movies/${movie.id}`}>
              <button>Details</button>
            </Link>
            <br />
            <button onClick={() => deleteMovie(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
