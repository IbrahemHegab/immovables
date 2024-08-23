"use client";

import { Button, Modal, Select } from "flowbite-react";
import room from "../../assets/available/image10.jpg";
import { TbToolsKitchen3 } from "react-icons/tb";
import { MdHolidayVillage, MdMeetingRoom } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGallery } from "../store/Gallerys/gallerySlice";
import { IoHome } from "react-icons/io5";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export function DetaildModel({ data, status }) {
  const [openModal, setOpenModal] = useState(true);

  console.log(data);
  console.log(status);

  return (
    <>
      <Modal
        show={data ? true : false}
        size={"2xl"}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div>
            <div className="">
              <div>
                <div>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    {data && data.images ? (
                      data.images.map((image) => (
                        <SwiperSlide key={image._id}>
                          <img
                            src={image.image}
                            alt="صور وحدات الموافقه"
                            className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                          />
                        </SwiperSlide>
                      ))
                    ) : (
                      <SwiperSlide>
                        {" "}
                        <img
                          src={room}
                          alt="الموافقة ريزدنس 155"
                          className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                        />
                      </SwiperSlide>
                    )}
                  </Swiper>

                  <div className="flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between p-3 md:p-2 lg:p-3">
                      <h3 className="font-ge-dinar-medium text-xl xl:text-[1.6rem] text-secondary-800 dark:text-secondary-200">
                        <IoHome className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                        <span className="text-2xl">
                          {data?.area === "apartment" ? "شقة" : "فيلا"} الموافقة
                        </span>
                      </h3>
                    </div>
                    <div className="text-lg xl:text-xl px-3 md:px-2 lg:px-3 flex justify-between">
                      <label className="whitespace-nowrap font-bold text-black dark:text-white flex items-end mt-2 font-acumin-pro">
                        <span className="">{data?.price}</span>
                        <span className="text-base font-normal font-sans px-1">
                          ريال
                        </span>
                      </label>
                    </div>
                    <div className="text-black dark:text-white text-base lg:text-lg font-normal py-2 px-2 md:px-2 lg:px-3">
                      <ul className="flex justify-between p-0 m-0">
                        <div>
                          <li>
                            <svg
                              className="inline-block w-5 mx-1 md:mx-0.5 text-secondary-500"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 16L2 19"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M12 13V7C12 5.89543 12.8954 5 14 5L18 5C19.1046 5 20 5.89543 20 7V9"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M12 13V7C12 5.89543 11.1046 5 10 5L6 5C4.89543 5 4 5.89543 4 7V9"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M20 9C18.8954 9 18 9.89543 18 11V13H6V11C6 9.89543 5.10457 9 4 9C2.89543 9 2 9.89543 2 11V17H22V11C22 9.89543 21.1046 9 20 9Z"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M22 16L22 19"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <span className="text-sm">المساحه:</span>
                            {data?.rooms}
                          </li>
                          <li>
                            <TbToolsKitchen3 className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                            <span className="text-sm">مطبخ:</span>
                            {data?.kitchen}
                          </li>
                        </div>
                        <div>
                          <li>
                            <MdMeetingRoom className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                            <span className="text-sm">عدد الغرف:</span>
                            {data?.rooms}
                          </li>
                          <li>
                            <MdHolidayVillage className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                            <span className="text-sm">النوع:</span>فيلا
                          </li>
                        </div>
                        <div>
                          <li>
                            <MdMeetingRoom className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                            <span className="text-sm">عدد الغرف:</span>
                            {data?.rooms}
                          </li>
                          <li>
                            <MdHolidayVillage className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                            <span className="text-sm">النوع:</span>فيلا
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
