import React from "react";
import { Route, Routes } from "react-router-dom";
import { AllCourses, Calendar, Main, SingleCourse } from "./pages";
import { Footer, Navbar, ScrollToTop } from "./components";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/single-course" element={<SingleCourse />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
