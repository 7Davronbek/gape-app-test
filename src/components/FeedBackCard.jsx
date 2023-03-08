import React, { useState } from "react";

const FeedBackCard = ({ modal, setModal }) => {
  const [count, setCount] = useState(1);
  const decrement = () => {
    if (count < 2) {
      setCount(1);
    } else {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div
      onClick={(e) => setModal(false)}
      className={`FeedBackCard ${modal ? "active" : ""}`}
    >
      <div className="container">
        <div className="row">
          <form className="col-12">
            <div onClick={(e) => e.stopPropagation()} className="cards">
              <div className="d-flex align-items-center justify-content-between mb-5">
                <h1>Worem ipsum dolor sit </h1>
                <div className="close">
                  <img
                    onClick={() => {
                      setModal(false);
                    }}
                    src="/assets/icons/close.svg"
                    alt=""
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-5 mb-4">
                  <input
                    type="text"
                    required
                    placeholder="имя"
                    className="form-control leftInput"
                  />

                  <input
                    type="text"
                    required
                    placeholder="Фамилия"
                    className="form-control leftInput"
                  />

                  <input
                    type="number"
                    required
                    placeholder="Номер телефона"
                    className="form-control leftInput"
                  />

                  <input
                    type="email"
                    required
                    placeholder="email"
                    className="form-control leftInput"
                  />

                  <div className="d-flex">
                    <input
                      className="me-3"
                      id="worem"
                      type="checkbox"
                      required
                    />
                    <label htmlFor="worem">
                      Worem ipsum{" "}
                      <span>
                        dolor sit amet, <br /> consectetur adipiscing elit.
                      </span>
                    </label>
                  </div>
                </div>
                <div className="col-lg-6 ms-auto mb-4">
                  <div className="d-flex align-items-center justify-content-between wrap">
                    <h3>цена</h3>
                    <h3>200.000 сум</h3>
                  </div>

                  <div className="d-flex align-items-center justify-content-between wrap">
                    <h3>Кол-во</h3>
                    <div className="d-flex align-items-center">
                      <button
                        onClick={decrement}
                        type="button"
                        className="btn"
                      >
                        -
                      </button>
                      <h6>{count}</h6>
                      <button
                        onClick={() => setCount((prev) => prev + 1)}
                        type="button"
                        className="btn"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <input
                    type="text"
                    required
                    placeholder="200.000 сум"
                    className="form-control"
                  />

                  <input
                    type="number"
                    required
                    placeholder="номер карты"
                    className="form-control"
                  />

                  <input
                    type="text"
                    required
                    placeholder=""
                    className="form-control"
                  />

                  <div className="d-flex align-items-center">
                    <input
                      type="number"
                      required
                      placeholder="срок дейст."
                      className="form-control me-3"
                    />
                    <input
                      type="number"
                      required
                      placeholder="cvc/cw"
                      className="form-control"
                    />
                  </div>

                  <button className="btn submitBtn" type="submit">
                    оплатить
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
