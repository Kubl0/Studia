import React from "react";
import { useFormik } from "formik";
import { directorActions } from "../reducers/DirectorReducers";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function DirectorEdit() {
  const { id } = useParams();

  const director = useSelector((state) =>
    state.directors.find((director) => director.id === parseInt(id))
  );

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      id: director.id,
      firstname: director.firstname,
      lastname: director.lastname,
      age: director.age,
      films: director.films,
    },
    onSubmit: (values) => {
      dispatch(directorActions.editDirector(values));
      formik.resetForm();
    },
  });

  return (
    <div>
      <h1>Director Edit</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={formik.handleChange}
          value={formik.values.firstname}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={formik.handleChange}
          value={formik.values.lastname}
        />
        <button type="submit">Edit Director</button>
      </form>
    </div>
  );
}
