import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="container">
        <div className="row">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 11112500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="col-lg-7">
                <h1>о нас</h1>
                <div className="cards">
                  <h2>Учебный центр Виноградства</h2>
                  <h3>
                    Horem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis. Ut commodo efficitur
                    neque. Ut diam quam, semper iaculis condimentum ac,
                    vestibulum eu nisl.
                  </h3>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="img">
                  <img src="/assets/images/singleHeader.png" alt="" />
                </div>
              </div>
            </SwiperSlide>  
            <SwiperSlide>
              <div className="col-lg-7">
                <h1>о нас</h1>
                <div className="cards">
                  <h2>Учебный центр Виноградства</h2>
                  <h3>
                    Horem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis. Ut commodo efficitur
                    neque. Ut diam quam, semper iaculis condimentum ac,
                    vestibulum eu nisl.
                  </h3>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="img">
                  <img src="/assets/images/singleHeader.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
