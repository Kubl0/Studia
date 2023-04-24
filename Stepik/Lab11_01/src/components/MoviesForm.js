import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { moviesActions } from "../reducers/MoviesReducer";

export default function MoviesForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: "",
      title: "",
      year: "",
    },
    onSubmit: (values) => {
      dispatch(moviesActions.addMovie(values));
      formik.resetForm();
    },
  });

  return (
    <div>
      <h1>Movies Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="ID"
          onChange={formik.handleChange}
          value={formik.values.id}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          onChange={formik.handleChange}
          value={formik.values.year}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}
