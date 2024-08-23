"use client";

import { Button, Modal, Select } from "flowbite-react";
import room from "../../assets/available/image10.jpg";
import { TbToolsKitchen3 } from "react-icons/tb";
import { MdMeetingRoom, MdBalcony } from "react-icons/md";
import { GiDoubleStreetLights, GiResize } from "react-icons/gi";
import { RiRobot3Fill } from "react-icons/ri";
import { PiWarehouseBold } from "react-icons/pi";
import { FaCar } from "react-icons/fa";
import { GrElevator } from "react-icons/gr";
import { TbStatusChange } from "react-icons/tb";
import { FaHeart } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import { IoHome } from "react-icons/io5";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export function DetaildModel({ data }) {
 const disptach = 

  return (
    <>
      <Modal
        show={data && openModal ? true : false}
        size={"2xl"}
        onClose={() => setOpenModal(false)}
        className="z-50"
      >
        <Modal.Header></Modal.Header>
        <Modal.Body className="p-0">
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
                          <span className="text-orange-500">
                            {" "}
                            {data?.kind === "apartment" ? "شقة" : "فيلا"}
                          </span>{" "}
                          الموافقة
                        </span>
                      </h3>
                    </div>
                    <div className="text-lg xl:text-xl px-3 md:px-2 lg:px-3 flex justify-between">
                      <label className="whitespace-nowrap font-bold text-black dark:text-white flex items-end mt-2 font-acumin-pro">
                        <span className="text-orange-500">{data?.price}</span>
                        <span className="text-base font-normal font-sans px-1">
                          ريال
                        </span>
                      </label>
                    </div>
                    <div className="text-black dark:text-white text-base lg:text-lg font-normal py-2 px-2 md:px-2 lg:px-3">
                      <ul className="grid grid-cols-3 justify-between p-0 m-0">
                        <li className="p-2">
                          <GiResize className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                          <span className="text-sm">المساحه:</span>
                          <span className="text-orange-500">{data?.area}</span>
                        </li>
                        <li className="p-2">
                          <TbToolsKitchen3 className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                          <span className="text-sm">مطبخ:</span>
                          <span className="text-orange-500">
                            {data?.kitchen}
                          </span>
                        </li>

                        <li className="p-2">
                          <MdMeetingRoom className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                          <span className="text-sm">عدد الغرف:</span>
                          <span className="text-orange-500">{data?.rooms}</span>
                        </li>
                        <li className="p-2">
                          <GiDoubleStreetLights className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                          <span className="text-sm">الشارع:</span>
                          <span className="text-orange-500">
                            {data?.street}
                          </span>
                        </li>

                        <li className="p-2">
                          <MdBalcony className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                          <span className="text-sm">عدد البلكونات:</span>
                          <span className="text-orange-500">
                            {data?.balcony}
                          </span>
                        </li>
                        <li className="p-2">
                          <MdBalcony className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                          <span className="text-sm">عدد الصالات:</span>
                          <span className="text-orange-500">{data?.hall}</span>
                        </li>
                        <li className="p-2">
                          <RiRobot3Fill className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                          <span className="text-sm">غرفه خادمه:</span>
                          <span className="text-orange-500">
                            {data?.maid ? "نعم" : "لا"}
                          </span>
                        </li>
                        <li className="p-2">
                          <PiWarehouseBold className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                          <span className="text-sm">غرفه حارس:</span>
                          <span className="text-orange-500">
                            {data?.warehouse ? "نعم" : "لا"}
                          </span>
                        </li>
                        <li className="p-2">
                          <FaCar className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                          <span className="text-sm">غرفه سائق:</span>
                          <span className="text-orange-500">
                            {data?.driver ? "نعم" : "لا"}
                          </span>
                        </li>
                        <li className="p-2">
                          <GrElevator className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                          <span className="text-sm">مصعد:</span>
                          <span className="text-orange-500">
                            {data?.elevator ? "نعم" : "لا"}
                          </span>
                        </li>
                        <li className="p-2">
                          <TbStatusChange className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                          <span className="text-sm">الحاله:</span>
                          <span className="text-orange-500">
                            {data?.status === "available"
                              ? "متاح"
                              : data?.status === "sold"
                              ? "مباع"
                              : "محجوز"}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="mx-2"
            color="red"
            onClick={() => setOpenModal(false)}
          >
            اغلاق
          </Button>
          <Button
            className="mx-2 items-center"
            color="red"
            onClick={() => (data = null)}
          >
            <FaHeart color="red" className="inline-block mx-1 md:mx-0.5 w-5 " />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
