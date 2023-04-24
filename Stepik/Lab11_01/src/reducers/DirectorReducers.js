import { createSlice } from "@reduxjs/toolkit";

const random = () => Math.floor(Math.random() * 100000);

const directorReducer = createSlice({
  name: "directors",
  initialState: [
    {
      id: random(),
      firstname: "Steven",
      lastname: "Spielberg",
      age: 74,
      films: ["The Dark Knight", "The Godfather: Part II"],
    },
    {
      id: random(),
      firstname: "Martin",
      lastname: "Scorsese",
      age: 77,
      films: ["The Godfather"],
    },
    {
      id: random(),
      firstname: "Quentin",
      lastname: "Tarantino",
      age: 56,
      films: ["Pulp Fiction"],
    },
    {
      id: random(),
      firstname: "Christopher",
      lastname: "Nolan",
      age: 50,
      films: ["The Godfather"],
    },
  ],
  reducers: {
    addDirector: (state, action) => {
      state.directors.push(action.payload);
      return state.sort();
    },
    deleteDirector: (state, action) => {
      state.directors = state.directors.filter(
        (director) => director.id !== action.payload
      );
      return state.sort();
    },
    editDirector: (state, action) => {
      state = state.map((director) =>
        director.id === action.payload.id ? action.payload : director
      );
      return state.sort();
    },
  },
});

export const directorActions = directorReducer.actions;
export default directorReducer.reducer;
