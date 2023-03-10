import React from "react";
import {
  AboutUs,
  Couches,
  Courses,
  Email,
  Gallery,
  Header,
} from "../components";

const Main = () => {
  return (
    <>
      <Header />
      <Courses />
      <AboutUs />
      <Couches />
      <Email />
      <Gallery />
    </>
  );
};

export default Main;
