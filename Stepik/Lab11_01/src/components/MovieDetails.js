import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const movies = useSelector((state) => state.movies);
  const movie = movies.find((movie) => movie.id === parseInt(id));
  const directors = useSelector((state) => state.directors);
  const movieDirectors = directors.filter((director) =>
    director.films.includes(movie.title)
  );

  return (
    <div>
      <h1>Movie Details</h1>
      <h2>Title: {movie.title}</h2>
      <h3>Year: {movie.year}</h3>
      <h3>Directors:</h3>
      <ul>
        {movieDirectors.map((director) => (
          <li key={Math.random()}>
            <Link to={`/directors/${director.id}`}>
              {director.firstname} {director.lastname}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
