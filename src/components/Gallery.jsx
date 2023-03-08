import React from "react";

const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Porem ipsum </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mb-4">
            <img className="w-100"  src="/assets/images/gallary1.png" alt="" />
          </div>

          <div className="col-lg-4 mb-4">
            <img  className="w-100" src="/assets/images/gallary2.png" alt="" />
          </div>

          <div className="col-lg-7 mb-4">
            <img src="/assets/images/gallary3.png" alt="" className="w-100" />
          </div>
          
          <div className="col-lg-5 mb-4">
            <img src="/assets/images/gallary4.png" alt="" className="w-100 h-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
