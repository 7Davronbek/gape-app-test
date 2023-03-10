import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [navbar, setNavbar] = useState(false);
  const [burger, setBurger] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);
  return (
    <>
      <div className={`Navbar ${navbar ? "active" : ""}`}>
        <div className="container">
          <div className="row w-100 position-relative">
            <div className="col-lg-2 col-5">
              <Link className="logo" to="/">
                <img
                  src="/assets/images/logo.png"
                  alt="Logo"
                  className="w-100"
                />
              </Link>
            </div>

            <div className="burger">
              <img
                onClick={() => setBurger(true)}
                src="/assets/icons/burger.svg"
                alt=""
              />
            </div>

            <div
              className={`col-6 ms-auto d-flex align-items-center justify-content-end phoneWrap ${
                burger && "burger"
              }`}
            >
              <div onClick={() => setBurger(false)} className="close">
                <img src="/assets/icons/closeWhite.svg" alt="" />
              </div>
              <div onClick={() => setBurger(false)}>
                <span>
                  <img src="/assets/icons/search.svg" alt="Search" />
                </span>
              </div>
              <div>
                <a
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className={`regular ${
                    location.pathname === "/all-courses" ? "active" : ""
                  }`}
                  to="/all-courses"
                >
                  КУРСЫ
                </a>
                <ul id="accordionExample" className="dropdown-menu">
                  <li>
                    <Link
                      to="/single-course"
                      onClick={() => setBurger(false)}
                      className="dropdown-item accordion"
                    >
                      Rorem{" "}
                      <i className="ms-3">
                        <img src="/assets/icons/right.svg" alt="" />
                      </i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/single-course"
                      onClick={() => setBurger(false)}
                      className="dropdown-item accordion"
                    >
                      Rorem{" "}
                      <i className="ms-3">
                        <img src="/assets/icons/right.svg" alt="" />
                      </i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/single-course"
                      onClick={() => setBurger(false)}
                      className="dropdown-item accordion"
                    >
                      Rorem{" "}
                      <i className="ms-3">
                        <img src="/assets/icons/right.svg" alt="" />
                      </i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/single-course"
                      onClick={() => setBurger(false)}
                      className="dropdown-item accordion"
                    >
                      Rorem{" "}
                      <i className="ms-3">
                        <img src="/assets/icons/right.svg" alt="" />
                      </i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  onClick={() => setBurger(false)}
                  className={` ${
                    location.pathname === "/about-us" ? "active" : ""
                  }`}
                  to="/about-us"
                >
                  о нас
                </Link>
              </div>
              <div>
                <Link
                  onClick={() => setBurger(false)}
                  className={` ${
                    location.pathname === "/about-us" ? "active" : ""
                  }`}
                  to="/about-us"
                >
                  КОНТАКТЫ
                </Link>
              </div>
              <div>
                <Link onClick={() => setBurger(false)} to="/calendar">
                  {location.pathname === "/calendar" ? (
                    <img src="/assets/icons/calendar.svg" alt="Search" />
                  ) : (
                    <img src="/assets/icons/calendary.svg" alt="Search" />
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbarLine"></div>
    </>
  );
};

export default Navbar;
