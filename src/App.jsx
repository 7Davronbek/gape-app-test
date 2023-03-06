import React from "react";
import { Route, Routes } from "react-router-dom";
import { AllCourses, Main } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/all-courses" element={<AllCourses />} />
      </Routes>
      <div className="vh-100"></div>
    </>
  );
};

export default App;
