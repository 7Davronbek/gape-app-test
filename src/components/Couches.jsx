import React from 'react'

const Couches = () => {
  return (
    <div className='Couches'>
      <div className="container">
        <div className="row">
            <div className="col-12">
                <h1>Наставники</h1>
            </div>

            <div className="col-12 imgWrap">
                <div className="img"><img src="/assets/images/couch1.png" alt="" /></div>
                <div className="img"><img src="/assets/images/couch2.png" alt="" /></div>
                <div className="img"><img src="/assets/images/couch3.png" alt="" /></div>
                <div className="img"><img src="/assets/images/couch4.png" alt="" /></div>
                <div className="img"><img src="/assets/images/couch5.png" alt="" /></div>
            </div>

            <div className="col-12">
                <h2 className='paddingLeft'>Horem ipsum </h2>
            </div>

            <div className="col-lg-7">
                <h3 className='paddingLeft'>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus </h3>
            </div>
            <div className="col-lg-4 ms-4">
                <h4 className='paddingLeft'>“Jorem ipsum dolor sit amet, consectetur adipiscing elit.”</h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Couches
