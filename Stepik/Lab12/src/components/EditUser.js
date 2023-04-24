import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { editUser } from "../actions/actions";

export default function EditUser({ user }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: user.name,
      newName: "",
    },
    onSubmit: (values) => {
      dispatch(editUser(values));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="newName"
        onChange={formik.handleChange}
        placeholder="New Name"
        value={formik.values.newName}
      />
      <button type="submit">Edit User</button>
    </form>
  );
}
