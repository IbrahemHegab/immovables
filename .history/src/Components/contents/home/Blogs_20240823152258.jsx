import { Swiper, SwiperSlide } from "swiper/react";
import { FaHeart } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";

import "swiper/css";
import "swiper/css/pagination";
import "./carousel.css";

import { Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import Slider from "./Slider";
import { MdHolidayVillage, MdPriceChange } from "react-icons/md";
import { useEffect, useState } from "react";
import { getGallery } from "../../store/Gallerys/gallerySlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "flowbite-react";
const Blogs = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.gallery);
  const [selectedShow] = useState(true);
  const filteredData = data.filter((e) => {
    return !selectedShow || e.show === true;
  });
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
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: true,
            // }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {filteredData.length > 0 && data
              ? filteredData.map((e) => (
                  <SwiperSlide key={e._id}>
                    {" "}
                    <li
                      className="carousel__slide carousel_slide--clone py-2"
                      aria-hidden="true"
                    >
                      <div className="bg-white shadow-lg dark:bg-black rounded-lg overflow-hidden mx-4 w-full h-full">
                        <a href="#/18" className="block">
                          <img
                            src={e.images[0].image}
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
                          <span>
                            {new Date(e.createdAt).toLocaleDateString("ar-EG", {
                              day: "numeric", // لعرض اليوم
                              month: "long", // لعرض الشهر كاملاً
                              year: "numeric", // لعرض السنة
                            })}
                          </span>
                        </div>
                        <div className="h-100 overflow-hidden mx-0 mt-0 mb-4 py-2 px-3 text-lg text-left rtl:text-right leading-8 text-black dark:text-white font-ge-dinar-medium">
                          <div className="grid grid-cols-2 ">
                            <div className="flex items-center justify-between p-3 md:p-2 lg:p-3">
                              <h3 className="font-ge-dinar-medium text-xl xl:text-[1.6rem] text-secondary-800 dark:text-secondary-200">
                                <IoHome className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                                <span className="text-xl">
                                  {e.kind === "apartment" ? "شقة" : "فيلا"}{" "}
                                  الموافقة
                                </span>
                              </h3>
                            </div>
                            <Button
                              className="mx-2  items-center"
                              color="red"
                              onClick={() => {}}
                            >
                              <FaHeart
                                color="red"
                                className="inline-block mx-1 md:mx-0.5  "
                              />اضافه الي المفضله
                            </Button>
                          </div>
                          <div className="grid grid-cols-2 content-between text-center border rounded">
                            <span>
                              <MdHolidayVillage className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                              {e.price} <small>ريال</small>
                            </span>
                            <span>
                              <MdPriceChange className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                              {e.area} <small>متر مربع</small>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </SwiperSlide>
                ))
              : "لايوجد وحدات معروضه"}
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
          to={"/Projects"}
        >
          عرض الوحدات
        </NavLink>
      </div>
    </div>
  );
};

export default Blogs;
