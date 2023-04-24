import { createReducer } from "@reduxjs/toolkit";
import { ADD_USER, EDIT_USER, DELETE_USER } from "../actions/actions";

const initialState = {
  users: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ADD_USER, (state, action) => {
      state.users.push(action.payload);
    })
    .addCase(EDIT_USER, (state, action) => {
      //eslint-disable-next-line
      state.users.map((user) => {
        if (user.name === action.payload.name) {
          user.name = action.payload.newName;
        }
      });
    })
    .addCase(DELETE_USER, (state, action) => {
      const user = state.users.find(
        (user) => user.name === action.payload.name
      );
      state.users.splice(state.users.indexOf(user), 1);
    });
});

export default reducer;
