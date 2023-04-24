import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../actions/actions";
import { useFormik } from "formik";

export default function AddUser() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      dispatch(addUser(values));
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <button type="submit">Add User</button>
    </form>
  );
}
