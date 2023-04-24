import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function DirectorsPage() {
  const directors = useSelector((state) => state.directors);

  return (
    <div>
      <h1>Directors Page</h1>
      <ul>
        {directors.map((director) => (
          <li key={director.id}>
            <Link to={`/directors/${director.id}`}>
              {director.firstname} {director.lastname}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
