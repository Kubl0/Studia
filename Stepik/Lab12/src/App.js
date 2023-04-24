import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import MainView from "./components/MainView";
import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </Provider>
  );
}

export default App;
