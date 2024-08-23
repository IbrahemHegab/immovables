import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../../../assets/available/image10.jpg";
import project2 from "../../../assets/available/image11.jpg";
import project3 from "../../../assets/available/image3.jpg";
import project4 from "../../../assets/available/image4.jpg";
import project5 from "../../../assets/available/image5.jpg";
import project6 from "../../../assets/available/image6.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./carousel.css";

import { Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import Slider from "./Slider";
import { MdHolidayVillage, MdMeetingRoom } from "react-icons/md";
const Blogs = () => {
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
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: true,
            // }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <li
                className="carousel__slide carousel_slide--clone py-2"
                aria-hidden="true"
              >
                <div className="bg-white shadow-lg dark:bg-black rounded-lg overflow-hidden mx-4 w-full h-full">
                  <a href="#/18" className="block">
                    <img
                      src={project1}
                      alt="blog"
                      data-v-2d36321d=""
                      className="w-full align-middle aspect-[5/3] object-cover"
                    />
                  </a>
                  <div className="flex px-2 pt-3 text-primary-500 space-x-2 space-x-reverse">
                    <svg
                      className="w-6 inline-block"
                      id="vuesax_linear_calendar"
                      data-name="vuesax/linear/calendar"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17.976 17.976"
                    >
                      <g id="calendar">
                        <path
                          id="Vector"
                          d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                          transform="translate(6.18 1.686)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-2"
                          data-name="Vector"
                          d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                          transform="translate(12.172 1.686)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-3"
                          data-name="Vector"
                          d="M12.545.373H-.188A.562.562,0,0,1-.75-.188.562.562,0,0,1-.188-.75H12.545a.562.562,0,0,1,.562.562A.562.562,0,0,1,12.545.373Z"
                          transform="translate(2.81 6.997)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-4"
                          data-name="Vector"
                          d="M3.557-.75H9.549A4.259,4.259,0,0,1,12.816.459a4.4,4.4,0,0,1,1.04,3.1V9.923a4.4,4.4,0,0,1-1.04,3.1A4.259,4.259,0,0,1,9.549,14.23H3.557A4.259,4.259,0,0,1,.29,13.021a4.4,4.4,0,0,1-1.04-3.1V3.557A4.4,4.4,0,0,1,.29.459,4.259,4.259,0,0,1,3.557-.75ZM9.549,13.106a3.2,3.2,0,0,0,2.444-.85,3.327,3.327,0,0,0,.739-2.333V3.557a3.327,3.327,0,0,0-.739-2.333A3.2,3.2,0,0,0,9.549.373H3.557a3.2,3.2,0,0,0-2.444.85A3.327,3.327,0,0,0,.373,3.557V9.923a3.327,3.327,0,0,0,.739,2.333,3.2,3.2,0,0,0,2.444.85Z"
                          transform="translate(2.435 2.81)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-5"
                          data-name="Vector"
                          d="M0,0H17.976V17.976H0Z"
                          fill="none"
                          opacity="0"
                        ></path>
                        <path
                          id="Vector-6"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(11.512 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-7"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(11.512 12.259)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-8"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(8.741 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-9"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(8.741 12.259)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-10"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(5.969 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-11"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(5.969 12.259)"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <span>أبريل 17</span>
                  </div>
                  <div className="h-100 overflow-hidden mx-0 mt-0 mb-4 py-2 px-3 text-lg text-left rtl:text-right leading-8 text-black dark:text-white font-ge-dinar-medium">
                    <a href="#/18" className="block">
                      فيلا الموافقة
                    </a>
                    <div className="grid grid-cols-2 content-between text-center border rounded">
                      <span>
                      <MdHolidayVillage className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                        1200 <small>ريال</small>
                      </span>
                      <span>
                        1500 <small>متر مربع</small>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </SwiperSlide>
          
        
            <SwiperSlide>
              {" "}
              <li
                className="carousel__slide carousel_slide--clone"
                aria-hidden="true"
              >
                <div className="bg-white shadow-lg dark:bg-black rounded-lg overflow-hidden mx-4 w-full h-full">
                  <a href="#/18" className="block">
                    <img
                      src={project4}
                      alt="blog"
                      data-v-2d36321d=""
                      className="w-full align-middle aspect-[5/3] object-cover"
                    />
                  </a>
                  <div className="flex px-2 pt-3 text-primary-500 space-x-2 space-x-reverse">
                    <svg
                      className="w-6 inline-block"
                      id="vuesax_linear_calendar"
                      data-name="vuesax/linear/calendar"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17.976 17.976"
                    >
                      <g id="calendar">
                        <path
                          id="Vector"
                          d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                          transform="translate(6.18 1.686)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-2"
                          data-name="Vector"
                          d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                          transform="translate(12.172 1.686)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-3"
                          data-name="Vector"
                          d="M12.545.373H-.188A.562.562,0,0,1-.75-.188.562.562,0,0,1-.188-.75H12.545a.562.562,0,0,1,.562.562A.562.562,0,0,1,12.545.373Z"
                          transform="translate(2.81 6.997)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-4"
                          data-name="Vector"
                          d="M3.557-.75H9.549A4.259,4.259,0,0,1,12.816.459a4.4,4.4,0,0,1,1.04,3.1V9.923a4.4,4.4,0,0,1-1.04,3.1A4.259,4.259,0,0,1,9.549,14.23H3.557A4.259,4.259,0,0,1,.29,13.021a4.4,4.4,0,0,1-1.04-3.1V3.557A4.4,4.4,0,0,1,.29.459,4.259,4.259,0,0,1,3.557-.75ZM9.549,13.106a3.2,3.2,0,0,0,2.444-.85,3.327,3.327,0,0,0,.739-2.333V3.557a3.327,3.327,0,0,0-.739-2.333A3.2,3.2,0,0,0,9.549.373H3.557a3.2,3.2,0,0,0-2.444.85A3.327,3.327,0,0,0,.373,3.557V9.923a3.327,3.327,0,0,0,.739,2.333,3.2,3.2,0,0,0,2.444.85Z"
                          transform="translate(2.435 2.81)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-5"
                          data-name="Vector"
                          d="M0,0H17.976V17.976H0Z"
                          fill="none"
                          opacity="0"
                        ></path>
                        <path
                          id="Vector-6"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(11.512 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-7"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(11.512 12.259)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-8"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(8.741 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-9"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(8.741 12.259)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-10"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(5.969 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-11"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(5.969 12.259)"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <span>أبريل 17</span>
                  </div>
                  <h2 className="h-100 overflow-hidden mx-0 mt-0 mb-4 py-2 px-3 text-lg text-left rtl:text-right leading-8 text-black dark:text-white font-ge-dinar-medium">
                    <a href="#/18" className="block">
                      الموافقة ريزدنس الراعي الماسي لمعرض مسكن العقاري 2023 في
                      الرياض
                    </a>
                  </h2>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <li
                className="carousel__slide carousel_slide--clone"
                aria-hidden="true"
              >
                <div className="bg-white shadow-lg dark:bg-black rounded-lg overflow-hidden mx-4 w-full h-full">
                  <a href="#/18" className="block">
                    <img
                      src={project5}
                      alt="blog"
                      data-v-2d36321d=""
                      className="w-full align-middle aspect-[5/3] object-cover"
                    />
                  </a>
                  <div className="flex px-2 pt-3 text-primary-500 space-x-2 space-x-reverse">
                    <svg
                      className="w-6 inline-block"
                      id="vuesax_linear_calendar"
                      data-name="vuesax/linear/calendar"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17.976 17.976"
                    >
                      <g id="calendar">
                        <path
                          id="Vector"
                          d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                          transform="translate(6.18 1.686)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-2"
                          data-name="Vector"
                          d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                          transform="translate(12.172 1.686)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-3"
                          data-name="Vector"
                          d="M12.545.373H-.188A.562.562,0,0,1-.75-.188.562.562,0,0,1-.188-.75H12.545a.562.562,0,0,1,.562.562A.562.562,0,0,1,12.545.373Z"
                          transform="translate(2.81 6.997)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-4"
                          data-name="Vector"
                          d="M3.557-.75H9.549A4.259,4.259,0,0,1,12.816.459a4.4,4.4,0,0,1,1.04,3.1V9.923a4.4,4.4,0,0,1-1.04,3.1A4.259,4.259,0,0,1,9.549,14.23H3.557A4.259,4.259,0,0,1,.29,13.021a4.4,4.4,0,0,1-1.04-3.1V3.557A4.4,4.4,0,0,1,.29.459,4.259,4.259,0,0,1,3.557-.75ZM9.549,13.106a3.2,3.2,0,0,0,2.444-.85,3.327,3.327,0,0,0,.739-2.333V3.557a3.327,3.327,0,0,0-.739-2.333A3.2,3.2,0,0,0,9.549.373H3.557a3.2,3.2,0,0,0-2.444.85A3.327,3.327,0,0,0,.373,3.557V9.923a3.327,3.327,0,0,0,.739,2.333,3.2,3.2,0,0,0,2.444.85Z"
                          transform="translate(2.435 2.81)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-5"
                          data-name="Vector"
                          d="M0,0H17.976V17.976H0Z"
                          fill="none"
                          opacity="0"
                        ></path>
                        <path
                          id="Vector-6"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(11.512 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-7"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(11.512 12.259)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-8"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(8.741 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-9"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(8.741 12.259)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-10"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(5.969 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-11"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(5.969 12.259)"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <span>أبريل 17</span>
                  </div>
                  <h2 className="h-100 overflow-hidden mx-0 mt-0 mb-4 py-2 px-3 text-lg text-left rtl:text-right leading-8 text-black dark:text-white font-ge-dinar-medium">
                    <a href="#/18" className="block">
                      الموافقة ريزدنس الراعي الماسي لمعرض مسكن العقاري 2023 في
                      الرياض
                    </a>
                  </h2>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <li
                className="carousel__slide carousel_slide--clone"
                aria-hidden="true"
              >
                <div className="bg-white shadow-lg dark:bg-black rounded-lg overflow-hidden mx-4 w-full h-full">
                  <a href="#/18" className="block">
                    <img
                      src={project6}
                      alt="blog"
                      data-v-2d36321d=""
                      className="w-full align-middle aspect-[5/3] object-cover"
                    />
                  </a>
                  <div className="flex px-2 pt-3 text-primary-500 space-x-2 space-x-reverse">
                    <svg
                      className="w-6 inline-block"
                      id="vuesax_linear_calendar"
                      data-name="vuesax/linear/calendar"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17.976 17.976"
                    >
                      <g id="calendar">
                        <path
                          id="Vector"
                          d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                          transform="translate(6.18 1.686)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-2"
                          data-name="Vector"
                          d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                          transform="translate(12.172 1.686)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-3"
                          data-name="Vector"
                          d="M12.545.373H-.188A.562.562,0,0,1-.75-.188.562.562,0,0,1-.188-.75H12.545a.562.562,0,0,1,.562.562A.562.562,0,0,1,12.545.373Z"
                          transform="translate(2.81 6.997)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-4"
                          data-name="Vector"
                          d="M3.557-.75H9.549A4.259,4.259,0,0,1,12.816.459a4.4,4.4,0,0,1,1.04,3.1V9.923a4.4,4.4,0,0,1-1.04,3.1A4.259,4.259,0,0,1,9.549,14.23H3.557A4.259,4.259,0,0,1,.29,13.021a4.4,4.4,0,0,1-1.04-3.1V3.557A4.4,4.4,0,0,1,.29.459,4.259,4.259,0,0,1,3.557-.75ZM9.549,13.106a3.2,3.2,0,0,0,2.444-.85,3.327,3.327,0,0,0,.739-2.333V3.557a3.327,3.327,0,0,0-.739-2.333A3.2,3.2,0,0,0,9.549.373H3.557a3.2,3.2,0,0,0-2.444.85A3.327,3.327,0,0,0,.373,3.557V9.923a3.327,3.327,0,0,0,.739,2.333,3.2,3.2,0,0,0,2.444.85Z"
                          transform="translate(2.435 2.81)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-5"
                          data-name="Vector"
                          d="M0,0H17.976V17.976H0Z"
                          fill="none"
                          opacity="0"
                        ></path>
                        <path
                          id="Vector-6"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(11.512 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-7"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(11.512 12.259)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-8"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(8.741 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-9"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(8.741 12.259)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-10"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(5.969 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-11"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(5.969 12.259)"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <span>أبريل 17</span>
                  </div>
                  <h2 className="h-100 overflow-hidden mx-0 mt-0 mb-4 py-2 px-3 text-lg text-left rtl:text-right leading-8 text-black dark:text-white font-ge-dinar-medium">
                    <a href="#/18" className="block">
                      الموافقة ريزدنس الراعي الماسي لمعرض مسكن العقاري 2023 في
                      الرياض
                    </a>
                  </h2>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <li
                className="carousel__slide carousel_slide--clone"
                aria-hidden="true"
              >
                <div className="bg-white shadow-lg dark:bg-black rounded-lg overflow-hidden mx-4 w-full h-full">
                  <a href="#/18" className="block">
                    <img
                      src={project1}
                      alt="blog"
                      data-v-2d36321d=""
                      className="w-full align-middle aspect-[5/3] object-cover"
                    />
                  </a>
                  <div className="flex px-2 pt-3 text-primary-500 space-x-2 space-x-reverse">
                    <svg
                      className="w-6 inline-block"
                      id="vuesax_linear_calendar"
                      data-name="vuesax/linear/calendar"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17.976 17.976"
                    >
                      <g id="calendar">
                        <path
                          id="Vector"
                          d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                          transform="translate(6.18 1.686)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-2"
                          data-name="Vector"
                          d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                          transform="translate(12.172 1.686)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-3"
                          data-name="Vector"
                          d="M12.545.373H-.188A.562.562,0,0,1-.75-.188.562.562,0,0,1-.188-.75H12.545a.562.562,0,0,1,.562.562A.562.562,0,0,1,12.545.373Z"
                          transform="translate(2.81 6.997)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-4"
                          data-name="Vector"
                          d="M3.557-.75H9.549A4.259,4.259,0,0,1,12.816.459a4.4,4.4,0,0,1,1.04,3.1V9.923a4.4,4.4,0,0,1-1.04,3.1A4.259,4.259,0,0,1,9.549,14.23H3.557A4.259,4.259,0,0,1,.29,13.021a4.4,4.4,0,0,1-1.04-3.1V3.557A4.4,4.4,0,0,1,.29.459,4.259,4.259,0,0,1,3.557-.75ZM9.549,13.106a3.2,3.2,0,0,0,2.444-.85,3.327,3.327,0,0,0,.739-2.333V3.557a3.327,3.327,0,0,0-.739-2.333A3.2,3.2,0,0,0,9.549.373H3.557a3.2,3.2,0,0,0-2.444.85A3.327,3.327,0,0,0,.373,3.557V9.923a3.327,3.327,0,0,0,.739,2.333,3.2,3.2,0,0,0,2.444.85Z"
                          transform="translate(2.435 2.81)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-5"
                          data-name="Vector"
                          d="M0,0H17.976V17.976H0Z"
                          fill="none"
                          opacity="0"
                        ></path>
                        <path
                          id="Vector-6"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(11.512 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-7"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(11.512 12.259)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-8"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(8.741 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-9"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(8.741 12.259)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-10"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(5.969 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-11"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(5.969 12.259)"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <span>أبريل 17</span>
                  </div>
                  <h2 className="h-100 overflow-hidden mx-0 mt-0 mb-4 py-2 px-3 text-lg text-left rtl:text-right leading-8 text-black dark:text-white font-ge-dinar-medium">
                    <a href="#/18" className="block">
                      الموافقة ريزدنس الراعي الماسي لمعرض مسكن العقاري 2023 في
                      الرياض
                    </a>
                  </h2>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <li
                className="carousel__slide carousel_slide--clone"
                aria-hidden="true"
              >
                <div className="bg-white shadow-lg dark:bg-black rounded-lg overflow-hidden mx-4 w-full h-full">
                  <a href="#/18" className="block">
                    <img
                      src={project2}
                      alt="blog"
                      data-v-2d36321d=""
                      className="w-full align-middle aspect-[5/3] object-cover"
                    />
                  </a>
                  <div className="flex px-2 pt-3 text-primary-500 space-x-2 space-x-reverse">
                    <svg
                      className="w-6 inline-block"
                      id="vuesax_linear_calendar"
                      data-name="vuesax/linear/calendar"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17.976 17.976"
                    >
                      <g id="calendar">
                        <path
                          id="Vector"
                          d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                          transform="translate(6.18 1.686)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-2"
                          data-name="Vector"
                          d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                          transform="translate(12.172 1.686)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-3"
                          data-name="Vector"
                          d="M12.545.373H-.188A.562.562,0,0,1-.75-.188.562.562,0,0,1-.188-.75H12.545a.562.562,0,0,1,.562.562A.562.562,0,0,1,12.545.373Z"
                          transform="translate(2.81 6.997)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-4"
                          data-name="Vector"
                          d="M3.557-.75H9.549A4.259,4.259,0,0,1,12.816.459a4.4,4.4,0,0,1,1.04,3.1V9.923a4.4,4.4,0,0,1-1.04,3.1A4.259,4.259,0,0,1,9.549,14.23H3.557A4.259,4.259,0,0,1,.29,13.021a4.4,4.4,0,0,1-1.04-3.1V3.557A4.4,4.4,0,0,1,.29.459,4.259,4.259,0,0,1,3.557-.75ZM9.549,13.106a3.2,3.2,0,0,0,2.444-.85,3.327,3.327,0,0,0,.739-2.333V3.557a3.327,3.327,0,0,0-.739-2.333A3.2,3.2,0,0,0,9.549.373H3.557a3.2,3.2,0,0,0-2.444.85A3.327,3.327,0,0,0,.373,3.557V9.923a3.327,3.327,0,0,0,.739,2.333,3.2,3.2,0,0,0,2.444.85Z"
                          transform="translate(2.435 2.81)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-5"
                          data-name="Vector"
                          d="M0,0H17.976V17.976H0Z"
                          fill="none"
                          opacity="0"
                        ></path>
                        <path
                          id="Vector-6"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(11.512 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-7"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(11.512 12.259)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-8"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(8.741 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-9"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(8.741 12.259)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-10"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(5.969 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-11"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(5.969 12.259)"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <span>أبريل 17</span>
                  </div>
                  <h2 className="h-100 overflow-hidden mx-0 mt-0 mb-4 py-2 px-3 text-lg text-left rtl:text-right leading-8 text-black dark:text-white font-ge-dinar-medium">
                    <a href="#/18" className="block">
                      الموافقة ريزدنس الراعي الماسي لمعرض مسكن العقاري 2023 في
                      الرياض
                    </a>
                  </h2>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <li
                className="carousel__slide carousel_slide--clone"
                aria-hidden="true"
              >
                <div className="bg-white shadow-lg dark:bg-black rounded-lg overflow-hidden mx-4 w-full h-full">
                  <a href="#/18" className="block">
                    <img
                      src={project3}
                      alt="blog"
                      data-v-2d36321d=""
                      className="w-full align-middle aspect-[5/3] object-cover"
                    />
                  </a>
                  <div className="flex px-2 pt-3 text-primary-500 space-x-2 space-x-reverse">
                    <svg
                      className="w-6 inline-block"
                      id="vuesax_linear_calendar"
                      data-name="vuesax/linear/calendar"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17.976 17.976"
                    >
                      <g id="calendar">
                        <path
                          id="Vector"
                          d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                          transform="translate(6.18 1.686)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-2"
                          data-name="Vector"
                          d="M-.188,2.62A.562.562,0,0,1-.75,2.059V-.188A.562.562,0,0,1-.188-.75a.562.562,0,0,1,.562.562V2.059A.562.562,0,0,1-.188,2.62Z"
                          transform="translate(12.172 1.686)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-3"
                          data-name="Vector"
                          d="M12.545.373H-.188A.562.562,0,0,1-.75-.188.562.562,0,0,1-.188-.75H12.545a.562.562,0,0,1,.562.562A.562.562,0,0,1,12.545.373Z"
                          transform="translate(2.81 6.997)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-4"
                          data-name="Vector"
                          d="M3.557-.75H9.549A4.259,4.259,0,0,1,12.816.459a4.4,4.4,0,0,1,1.04,3.1V9.923a4.4,4.4,0,0,1-1.04,3.1A4.259,4.259,0,0,1,9.549,14.23H3.557A4.259,4.259,0,0,1,.29,13.021a4.4,4.4,0,0,1-1.04-3.1V3.557A4.4,4.4,0,0,1,.29.459,4.259,4.259,0,0,1,3.557-.75ZM9.549,13.106a3.2,3.2,0,0,0,2.444-.85,3.327,3.327,0,0,0,.739-2.333V3.557a3.327,3.327,0,0,0-.739-2.333A3.2,3.2,0,0,0,9.549.373H3.557a3.2,3.2,0,0,0-2.444.85A3.327,3.327,0,0,0,.373,3.557V9.923a3.327,3.327,0,0,0,.739,2.333,3.2,3.2,0,0,0,2.444.85Z"
                          transform="translate(2.435 2.81)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-5"
                          data-name="Vector"
                          d="M0,0H17.976V17.976H0Z"
                          fill="none"
                          opacity="0"
                        ></path>
                        <path
                          id="Vector-6"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(11.512 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-7"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(11.512 12.259)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-8"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(8.741 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-9"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(8.741 12.259)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-10"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(5.969 10.012)"
                          fill="currentColor"
                        ></path>
                        <path
                          id="Vector-11"
                          data-name="Vector"
                          d="M.25,1H.244a.749.749,0,1,1,0-1.5H.25A.749.749,0,0,1,.25,1Z"
                          transform="translate(5.969 12.259)"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <span>أبريل 17</span>
                  </div>
                  <h2 className="h-100 overflow-hidden mx-0 mt-0 mb-4 py-2 px-3 text-lg text-left rtl:text-right leading-8 text-black dark:text-white font-ge-dinar-medium">
                    <a href="#/18" className="block">
                      الموافقة ريزدنس الراعي الماسي لمعرض مسكن العقاري 2023 في
                      الرياض
                    </a>
                  </h2>
                </div>
              </li>
            </SwiperSlide>
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
