import React from "react";
import { Route, Routes } from "react-router-dom";
import { AllCourses, Main } from "./pages";
import { Footer, Navbar, ScrollToTop } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/all-courses" element={<AllCourses />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
