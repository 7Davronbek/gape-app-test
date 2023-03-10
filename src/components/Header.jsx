import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="row">
                  <div className="col-lg-6">
                    <h1>
                      Yorem <b>ipsum dolor</b>{" "}
                    </h1>
                    <h2>
                      Torem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                    <button className="btn">Купить</button>
                  </div>

                  <div className="col-lg-5 ms-auto mt-5">
                    <div className="d-flex align-items-center wrap">
                      <span className="">
                        <img src="/assets/icons/calendarWhite.svg" alt="" />
                      </span>
                      <h3>6 февраля</h3>
                    </div>

                    <div className="d-flex align-items-center wrap">
                      <span className="">
                        <img src="/assets/icons/clock.svg" alt="" />
                      </span>
                      <h3>12:00</h3>
                    </div>

                    <div className="d-flex align-items-center wrap">
                      <span className="">
                        <img src="/assets/icons/locationWhite.svg" alt="" />
                      </span>
                      <h3>Yorem ipsum dolor </h3>
                    </div>

                    <h5>700.000 сум</h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <div className="col-lg-6">
                    <h1>
                      Yorem <b>ipsum dolor</b>{" "}
                    </h1>
                    <h2>
                      Torem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                    <button className="btn">Купить</button>
                  </div>

                  <div className="col-lg-5 ms-auto mt-5">
                    <div className="d-flex align-items-center wrap">
                      <span className="">
                        <img src="/assets/icons/calendarWhite.svg" alt="" />
                      </span>
                      <h3>6 февраля</h3>
                    </div>

                    <div className="d-flex align-items-center wrap">
                      <span className="">
                        <img src="/assets/icons/clock.svg" alt="" />
                      </span>
                      <h3>12:00</h3>
                    </div>

                    <div className="d-flex align-items-center wrap">
                      <span className="">
                        <img src="/assets/icons/locationWhite.svg" alt="" />
                      </span>
                      <h3>Yorem ipsum dolor </h3>
                    </div>

                    <h5>700.000 сум</h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <div className="col-lg-6">
                    <h1>
                      Yorem <b>ipsum dolor</b>{" "}
                    </h1>
                    <h2>
                      Torem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                    <button className="btn">Купить</button>
                  </div>

                  <div className="col-lg-5 ms-auto mt-5">
                    <div className="d-flex align-items-center wrap">
                      <span className="">
                        <img src="/assets/icons/calendarWhite.svg" alt="" />
                      </span>
                      <h3>6 февраля</h3>
                    </div>

                    <div className="d-flex align-items-center wrap">
                      <span className="">
                        <img src="/assets/icons/clock.svg" alt="" />
                      </span>
                      <h3>12:00</h3>
                    </div>

                    <div className="d-flex align-items-center wrap">
                      <span className="">
                        <img src="/assets/icons/locationWhite.svg" alt="" />
                      </span>
                      <h3>Yorem ipsum dolor </h3>
                    </div>

                    <h5>700.000 сум</h5>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
