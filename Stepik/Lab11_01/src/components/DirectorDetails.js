import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function DirectorDetails() {
  const { id } = useParams();

  const directors = useSelector((state) => state.directors);

  const director = directors.find((director) => director.id === parseInt(id));

  return (
    <div>
      <h1>Director Details</h1>
      <h2>
        {director.firstname} {director.lastname}
      </h2>
      <h3>Age: {director.age}</h3>
      <h3>Movies</h3>
      <ul>
        {director.films.map((movie) => (
          <li key={Math.random()}>
            {movie}
            <br />
          </li>
        ))}
      </ul>
      <Link to={`/directors/${id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}
