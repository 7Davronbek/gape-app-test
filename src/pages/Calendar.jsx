import React from "react";

const Calendar = () => {
  return (
    <div className="Calendar">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <h1>Календарь</h1>

            <div className="d-flex align-items-center justify-content-between ">
              <div className="filter">
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
  );
};

export default Calendar;
