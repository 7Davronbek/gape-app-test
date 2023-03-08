import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [navbar, setNavbar] = useState(false);

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
          <div className="row">
            <div className="col-lg-2">
              <Link to="/">
                <img
                  src="/assets/images/logo.png"
                  alt="Logo"
                  className="w-100"
                />
              </Link>
            </div>

            <div className="col-lg-6 ms-auto d-flex align-items-center justify-content-end">
              <div>
                <span>
                  <img src="/assets/icons/search.svg" alt="Search" />
                </span>
              </div>
              <div>
                <Link
                  className={`regular ${
                    location.pathname === "/all-courses" ? "active" : ""
                  }`}
                  to="/all-courses"
                >
                  КУРСЫ
                </Link>
              </div>
              <div>
                <Link
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
                  className={` ${
                    location.pathname === "/about-us" ? "active" : ""
                  }`}
                  to="/about-us"
                >
                  КОНТАКТЫ
                </Link>
              </div>
              <div>
                <span>
                  <img src="/assets/icons/calendary.svg" alt="Search" />
                </span>
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
