import { createSlice } from "@reduxjs/toolkit";

const random = () => Math.floor(Math.random() * 100000);

const movieReducer = createSlice({
  name: "movies",
  initialState: [
    { id: random(), title: "The Godfather", year: 1972 },
    { id: random(), title: "Pulp Fiction", year: 1994 },
    { id: random(), title: "The Dark Knight", year: 2008 },
    { id: random(), title: "The Godfather: Part II", year: 1974 },
  ],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    deleteMovie: (state, action) => {
      return state.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const moviesActions = movieReducer.actions;
export default movieReducer.reducer;
