import React from "react";
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <div className="Courses">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>курсы</h1>
          </div>

          <Link to='/single-course' className="col-lg-4">
            <div className="cards">
              <img
                src="/assets/images/course1.png"
                alt="Course image"
                className="w-100"
              />
              <div className="d-flex mt-2">
                <h2>Lorem, ipsum dolor.</h2>
                <div>
                  <h3>06</h3>
                  <h4>февраля</h4>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <h5>Morem ipsum dolor sit amet, consectetur</h5>
                <div className="arrow">
                  <img src="/assets/icons/arrow.svg" alt="" />
                </div>
              </div>
            </div>
          </Link>
          
          <Link to='/single-course' className="col-lg-4">
            <div className="cards">
              <img
                src="/assets/images/course2.png"
                alt="Course image"
                className="w-100"
              />
              <div className="d-flex mt-2">
                <h2>Lorem, ipsum dolor.</h2>
                <div>
                  <h3>06</h3>
                  <h4>февраля</h4>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <h5>Morem ipsum dolor sit amet, consectetur</h5>
                <div className="arrow">
                  <img src="/assets/icons/arrow.svg" alt="" />
                </div>
              </div>
            </div>
          </Link>
          
          <Link to='/single-course' className="col-lg-4">
            <div className="cards">
              <img
                src="/assets/images/course3.png"
                alt="Course image"
                className="w-100"
              />
              <div className="d-flex mt-2">
                <h2>Lorem, ipsum dolor.</h2>
                <div>
                  <h3>06</h3>
                  <h4>февраля</h4>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <h5>Morem ipsum dolor sit amet, consectetur</h5>
                <div className="arrow">
                  <img src="/assets/icons/arrow.svg" alt="" />
                </div>
              </div>
            </div>
          </Link>

          <div className="col-12">
            <Link to='/all-courses' className="btn">СМОТРЕТЬ ВСЕ</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
