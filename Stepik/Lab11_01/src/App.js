import React from "react";
import HomePage from "./components/HomePage";
import DirectorReducers from "./reducers/DirectorReducers";
import MoviesReducer from "./reducers/MoviesReducer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import MoviesPage from "./components/MoviesPage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import MoviesForm from "./components/MoviesForm";
import MovieDetails from "./components/MovieDetails";
import DirectorsPage from "./components/DirectorsPage";
import DirectorDetails from "./components/DirectorDetails";
import DirectorEditfrom from "./components/DirectorEdit";

function App() {
  const store = configureStore({
    reducer: {
      directors: DirectorReducers,
      movies: MoviesReducer,
    },
  });

  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="movies/add" element={<MoviesForm />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="directors" element={<DirectorsPage />} />
        <Route path="directors/:id" element={<DirectorDetails />} />
        <Route path="directors/:id/edit" element={<DirectorEditfrom />} />
      </Routes>
    </Provider>
  );
}

export default App;
