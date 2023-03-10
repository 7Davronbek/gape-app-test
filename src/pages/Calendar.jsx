import React, { useState } from "react";

const Calendar = () => {
  const [filter, setFilter] = useState(false);
  return (
    <>
      <div onClick={() => setFilter(false)} className="Calendar">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 mx-auto">
              <h1>Календарь</h1>

              <div className="d-flex align-items-center justify-content-between filterWrap">
                <div
                  onClick={(e) => {
                    setFilter(true), e.stopPropagation();
                  }}
                  className="filter"
                >
                  <span>
                    <img src="/assets/icons/filter.svg" alt="" />
                  </span>
                  <h6>фильтр</h6>
                </div>
                <div className="calendar">
                  <span className="left">
                    <img src="/assets/icons/left.svg" alt="" />
                  </span>
                  <h5>февраль, 2023</h5>
                  <span className="left">
                    <img src="/assets/icons/right.svg" alt="" />
                  </span>
                </div>
              </div>

              <div className="calendarWrap">
                <div className="day">
                  <div className="number">08</div>
                  <h2>понедельник</h2>
                </div>

                <div className="wrap blue">
                  <h3>12:00</h3>
                  <h4>Corem ipsum dolor </h4>
                  <p>Porem ipsum dolor </p>
                </div>

                <div className="wrap blue">
                  <h3>12:00</h3>
                  <h4>Corem ipsum dolor </h4>
                  <p>Porem ipsum dolor </p>
                </div>
              </div>
              <div className="calendarWrap">
                <div className="day red">
                  <div className="number">10</div>
                  <h2>понедельник</h2>
                </div>

                <div className="wrap red">
                  <h3>12:00</h3>
                  <h4>Corem ipsum dolor </h4>
                  <p>Porem ipsum dolor </p>
                </div>

                <div className="wrap red">
                  <h3>12:00</h3>
                  <h4>Corem ipsum dolor </h4>
                  <p>Porem ipsum dolor </p>
                </div>
              </div>
              <div className="calendarWrap">
                <div className="day">
                  <div className="number">06</div>
                  <h2>понедельник</h2>
                </div>

                <div className="wrap blue">
                  <h3>12:00</h3>
                  <h4>Corem ipsum dolor </h4>
                  <p>Porem ipsum dolor </p>
                </div>

                <div className="wrap blue">
                  <h3>12:00</h3>
                  <h4>Corem ipsum dolor </h4>
                  <p>Porem ipsum dolor </p>
                </div>
              </div>
              <div className="calendarWrap">
                <div className="day red">
                  <div className="number">06</div>
                  <h2>понедельник</h2>
                </div>

                <div className="wrap red">
                  <h3>12:00</h3>
                  <h4>Corem ipsum dolor </h4>
                  <p>Porem ipsum dolor </p>
                </div>

                <div className="wrap red">
                  <h3>12:00</h3>
                  <h4>Corem ipsum dolor </h4>
                  <p>Porem ipsum dolor </p>
                </div>
              </div>
              <div className="calendarWrap">
                <div className="day">
                  <div className="number">06</div>
                  <h2>понедельник</h2>
                </div>

                <div className="wrap blue">
                  <h3>12:00</h3>
                  <h4>Corem ipsum dolor </h4>
                  <p>Porem ipsum dolor </p>
                </div>

                <div className="wrap blue">
                  <h3>12:00</h3>
                  <h4>Corem ipsum dolor </h4>
                  <p>Porem ipsum dolor </p>
                </div>
              </div>
              <div className="calendarWrap">
                <div className="day red">
                  <div className="number">06</div>
                  <h2>понедельник</h2>
                </div>

                <div className="wrap red">
                  <h3>12:00</h3>
                  <h4>Corem ipsum dolor </h4>
                  <p>Porem ipsum dolor </p>
                </div>

                <div className="wrap red">
                  <h3>12:00</h3>
                  <h4>Corem ipsum dolor </h4>
                  <p>Porem ipsum dolor </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`Filter ${filter ? "active" : ""}`}>
        <div className="container">
          <div className="row">
            <div>
              <div onClick={(e) => e.stopPropagation()} className="cards">
                <div className="close">
                  <img
                    onClick={() => setFilter(false)}
                    src="/assets/icons/close.svg"
                    alt=""
                  />
                </div>
                <div className="filter">
                  <span>
                    <img src="/assets/icons/filter.svg" alt="" />
                  </span>
                  <h6>фильтр</h6>
                </div>

                <div className="inputWrap">
                  <input type="checkbox" id="12" />
                  <label htmlFor="12">Worem ipsum </label>
                </div>

                <div className="inputWrap">
                  <input type="checkbox" id="23" />
                  <label htmlFor="23">Worem ipsum </label>
                </div>

                <div className="inputWrap">
                  <input type="checkbox" id="34" />
                  <label htmlFor="34">Worem ipsum </label>
                </div>

                <div className="inputWrap">
                  <input type="checkbox" id="45" />
                  <label htmlFor="45">Worem ipsum </label>
                </div>

                <div className="inputWrap">
                  <input type="checkbox" id="56" />
                  <label htmlFor="56">Worem ipsum </label>
                </div>

                <div className="filter">
                  <h6>время</h6>
                </div>

                <input type="time" className="form-control" />

                <div className="filter">
                  <h6>Место</h6>
                </div>

                <div className="inputWrap">
                  <input type="checkbox" id="lorem" />
                  <label htmlFor="lorem">Worem ipsum </label>
                </div>

                <div className="inputWrap">
                  <input type="checkbox" id="lorem2" />
                  <label htmlFor="lorem2">Worem ipsum </label>
                </div>

                <div className="inputWrap">
                  <input type="checkbox" id="lorem3" />
                  <label htmlFor="lorem3">Worem ipsum </label>
                </div>

                <div className="inputWrap">
                  <input type="checkbox" id="lore4" />
                  <label htmlFor="lore4">Worem ipsum </label>
                </div>

                <div className="inputWrap">
                  <input type="checkbox" id="5" />
                  <label htmlFor="5">Worem ipsum </label>
                </div>

                <div className="filter">
                  <h6>день</h6>
                </div>

                <input type="date" className="form-control" />

                <button className="btn">готово</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
