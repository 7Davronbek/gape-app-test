import React from "react";
import { Route, Routes } from "react-router-dom";
import { AllCourses, Main, SingleCourse } from "./pages";
import { Footer, Navbar, ScrollToTop } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/single-course" element={<SingleCourse />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
