import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  let [sl, setSl] = useState([]);
  let fetchSlider = async () => {
    try {
      let data = await fetch("http://localhost:8000/slider");
      let res = await data.json();
      setSl(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchSlider();
  }, []);
  return (
    <>
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sl.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <a href={item.href}>
                <img src={item.src} alt="" />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
