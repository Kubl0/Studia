import React from "react";
import { useSelector } from "react-redux";

export default function HomePage() {
  const movies = useSelector((state) => state.movies);
  const newest = movies.slice(-3).sort((a, b) => b.year - a.year);

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Newest Movies</h2>
      <ul>
        {newest.map((movie) => (
          <li key={movie.id}>
            {movie.title}
            <br />
            {movie.year}
          </li>
        ))}
      </ul>
    </div>
  );
}
