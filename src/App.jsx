import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <div className="vh-100"></div>
    </>
  );
};

export default App;
