import { Link } from "react-router-dom";
import React from "react";

export default function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/add">Add User</Link>
    </div>
  );
}
