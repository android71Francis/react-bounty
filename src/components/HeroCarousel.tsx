import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HeroImage from "./HeroImage";

const heroImages = [
  {
    imageUrl: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imageUrl: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg",
    text: "Pellentesque habitant morbi tristique senectus et.",
  },
  {
    imageUrl: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg",
    text: "Netus et malesuada fames ac turpis egestas.",
  },
];

const HeroCarousel: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation={true}
      className="bg-gray-100"
    >
      {heroImages.map((data, index) => (
        <SwiperSlide key={index}>
          <HeroImage imageUrl={data.imageUrl} text={data.text} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
