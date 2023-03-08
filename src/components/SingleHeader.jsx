import React, { useState } from "react";
import FeedBackCard from "./FeedBackCard";

const SingleHeader = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="SingleHeader">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="cards">
                <h1>Torem ipsum dolor sit </h1>
                <h2>старт: 06 февраля</h2>
                <h3>
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
                </h3>
                <h4>200.000 сум</h4>
                <button onClick={() => setModal(true)} className="btn">
                  Купить
                </button>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="img">
                <img
                  src="/assets/images/singleHeader.png"
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeedBackCard modal={modal} setModal={setModal} />
    </>
  );
};

export default SingleHeader;
