import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../../../assets/available/image10.jpg";
import { FaRegHeart } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./carousel.css";

import { Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import Slider from "./Slider";
import { MdHolidayVillage, MdPriceChange } from "react-icons/md";
import { useEffect } from "react";
import { getGallery } from "../../store/Gallerys/gallerySlice";
import { useDispatch, useSelector } from "react-redux";
const Blogs = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.gallery);
  console.log(data);
  
  useEffect(() => {
    dispatch(getGallery());
  }, [dispatch]);
  return (
    <div className="my-0  m-auto">
      <Slider />
      <div className="text-center mb-3 lg:my-5">
        <svg
          className="inline-block w-6 h-6 lg:w-10 lg:h-10"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="17.433"
          viewBox="0 0 12 17.433"
        >
          <g
            id="Group_11582"
            data-name="Group 11582"
            transform="translate(0 0)"
          >
            <g
              id="Group_11581"
              data-name="Group 11581"
              transform="translate(0 0)"
              clipPath="url(#clip-path)"
            >
              <line
                id="Line_153"
                data-name="Line 153"
                y1="10.531"
                x2="7.951"
                transform="translate(3.941 0.081)"
                fill="none"
                stroke="#a4874c"
                strokeMiterlimit="10"
                strokeWidth="0.75"
              ></line>
              <line
                id="Line_154"
                data-name="Line 154"
                y1="10.531"
                x2="7.951"
                transform="translate(0.107 6.821)"
                fill="none"
                stroke="#a4874c"
                strokeMiterlimit="10"
                strokeWidth="0.75"
              ></line>
            </g>
          </g>
        </svg>
        <h1 className="inline-block mt-5 text-xl font-header md:text-2xl px-1.5 lg:text-4xl font-ge-dinar-medium leading-none text-black dark:text-white">
          وحدات الموافقة
        </h1>
      </div>
      <section
        className="carousel carousel--rtl mt-6"
        dir="rtl"
        aria-label="Gallery"
        tabIndex="0"
        id="posts-slider"
      >
        <div className="carousel__viewport">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            dir="rtl"
            initialSlide={0}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            centeredSlides
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {data.length >0  && data ?() :() }
          

    
          </Swiper>
        </div>
        <div
          className="carousel__liveregion carousel__sr-only"
          aria-live="polite"
          aria-atomic="true"
        >
          Item 3 of 3
        </div>
      </section>
      <div className="mt-4 lg:my-8 text-center">
        <NavLink
          className="text-black dark:text-white text-base lg:text-xl py-1 lg:py-2 px-4 lg:px-6 border border-black dark:border-white inline-block"
          to={"/blogs"}
        >
          عرض الوحدات
        </NavLink>
      </div>
    </div>
  );
};

export default Blogs;
