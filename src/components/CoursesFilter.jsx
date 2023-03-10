import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";

const CoursesFilter = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="CoursesFilter">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>все курсы</h1>

            <div className="btnWrap">
              <button
                onClick={() => {
                  toggle("1");
                }}
                className={`btn ${classnames({ active: activeTab === "1" })}`}
              >
                популярное
              </button>
              <button
                onClick={() => {
                  toggle("2");
                }}
                className={`btn ${classnames({ active: activeTab === "2" })}`}
              >
                уроки
              </button>
              <button
                onClick={() => {
                  toggle("3");
                }}
                className={`btn ${classnames({ active: activeTab === "3" })}`}
              >
                дегустация
              </button>
              <button
                onClick={() => {
                  toggle("4");
                }}
                className={`btn ${classnames({ active: activeTab === "4" })}`}
              >
                дегустация
              </button>
            </div>
          </div>
        </div>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1" className="">
            <div className="row myRow">
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course1.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course2.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course3.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course2.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course3.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course1.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </TabPane>
          <TabPane tabId="2" className="">
            <div className="row myRow">
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course3.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course2.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course1.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course2.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course3.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course1.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </TabPane>
          <TabPane tabId="3" className="">
            <div className="row myRow">
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course2.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course2.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course2.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course2.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course3.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course1.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </TabPane>
          <TabPane tabId="4" className="">
            <div className="row myRow">
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course1.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course1.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course1.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course2.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course3.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/single-course" className="col-lg-4 mb-4">
                <div className="cards">
                  <img
                    src="/assets/images/course1.png"
                    alt="Course image"
                    className="w-100"
                  />
                  <div className="d-flex mt-2 justify-content-between">
                    <h2>Lorem, ipsum dolor.</h2>
                    <div>
                      <h3>06</h3>
                      <h4>февраля</h4>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-lg-0 mt-2">
                    <h5>Morem ipsum dolor sit amet, consectetur</h5>
                    <div className="arrow">
                      <img src="/assets/icons/arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default CoursesFilter;
