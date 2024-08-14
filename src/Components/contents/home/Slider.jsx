
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "./imagesSlide/image10.jpg";
import slide2 from "./imagesSlide/image11.jpg";
import slide3 from "./imagesSlide/image3.jpg";
import slide4 from "./imagesSlide/image5.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide style={{ height: "75vh" }}>
        <img src={slide1} className="h-screen w-screen" alt="Slider Swiper" />
      </SwiperSlide>
      <SwiperSlide style={{ height: "75vh" }}>
        <img src={slide2} className="h-screen w-screen" alt="Slider Swiper" />
      </SwiperSlide>
      <SwiperSlide style={{ height: "75vh" }}>
        <img src={slide3} className="h-screen w-screen" alt="Slider Swiper" />
      </SwiperSlide>
      <SwiperSlide style={{ height: "75vh" }}>
        <img src={slide4} className="h-screen w-screen" alt="Slider Swiper" />
      </SwiperSlide>
      <SwiperSlide style={{ height: "75vh" }}>
        <img src={slide1} className="h-screen w-screen" alt="Slider Swiper" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
