import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="img">
              <img src="/assets/images/logo.png" alt="" />
            </div>
          </div>

          <div className="col-lg-11 mx-auto">
            <div className="row">
              <div className="col-lg-2 mb-3">
                <h2>Jorem</h2>
                <h3>Porem</h3>
                <h3>ipsum</h3>
                <h3>dolor sit</h3>
                <h3>amet</h3>
                <h3>consectetur</h3>
              </div>

              <div className="col-lg-2 mb-3">
                <h2>Dorem</h2>
                <h3>Porem</h3>
                <h3>ipsum</h3>
                <h3>dolor sit</h3>
                <h3>amet</h3>
                <h3>consectetur</h3>
              </div>

              <div className="col-lg-3 mb-3">
                <h2>Contacts</h2>

                <a
                  href="tel: +998909999999"
                  className="d-flex align-items-center"
                >
                  {" "}
                  <i className="icon">
                    <img src="/assets/icons/phone.svg" alt="" />
                  </i>{" "}
                  +998 (90) 999 99 99
                </a>
                <a
                  href="emailto='fake@gmail.com"
                  className="d-flex align-items-center"
                >
                  {" "}
                  <i className="icon">
                    <img src="/assets/icons/location.svg" alt="" />
                  </i>{" "}
                  Yorem ipsum dolor
                </a>
              </div>

              <div className="col-lg-5 mb-3">
                <h2>подпишитесь на новости</h2>

                <form className="inputWrap">
                  <input
                    type="email"
                    required
                    placeholder="Ваш email"
                    className="form-control"
                  />
                  <button className="btn">отправить</button>
                </form>

                <h2>Join us</h2>

                <div className="wrap">
                  <a href="" className="i">
                    <img src="/assets/icons/tg.svg" alt="" />
                  </a>
                  <a href="" className="i">
                    <img src="/assets/icons/fb.svg" alt="" />
                  </a>
                  <a href="" className="i">
                    <img src="/assets/icons/insta.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12"></div>
        </div>

        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="footerLine"></div>
            <p>© copyright 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
