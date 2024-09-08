import { FaHeart, FaCar } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { MdMeetingRoom, MdBalcony } from "react-icons/md";
import { GiResize } from "react-icons/gi";
import { RiRobot3Fill } from "react-icons/ri";
import { PiWarehouseBold } from "react-icons/pi";
import { Tooltip } from "flowbite-react";

import { GrElevator } from "react-icons/gr";
import img from "../../../assets/available/image10.jpg";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";

const Cart = () => {
  const [filter, setFilter] = useState("all");
  const products = [
    {
      id: 1,
      name: "فيلا فاخرة",
      area: 300,
      price: 5000000,
      rooms: 1,
      street: 1,
      hall: 1,
      kitchen: 1,
      bathrooms: 1,
      balcony: 1,
      maid: 1,
      elevator: 1,
      driver: 1,
      warehouse: 1,
      image: [img, img, img, img],
    },
    {
      id: 2,
      name: "شقة حديثة",
      area: 150,
      price: 2000000,
      rooms: 2,
      street: 1,
      hall: 1,
      kitchen: 1,
      bathrooms: 2,
      balcony: 2,
      maid: 0,
      elevator: 1,
      driver: 0,
      warehouse: 0,
      image: [img, img, img, img],
    },
    {
      id: 2,
      name: "شقة حديثة",
      area: 150,
      price: 2000000,
      rooms: 2,
      street: 1,
      hall: 1,
      kitchen: 1,
      bathrooms: 2,
      balcony: 2,
      maid: 0,
      elevator: 1,
      driver: 0,
      warehouse: 0,
      image: [img, img, img, img],
    },
    {
      id: 2,
      name: "شقة حديثة",
      area: 150,
      price: 2000000,
      rooms: 2,
      street: 1,
      hall: 1,
      kitchen: 1,
      bathrooms: 2,
      balcony: 2,
      maid: 0,
      elevator: 1,
      driver: 0,
      warehouse: 0,
      image: [img, img, img, img],
    },
    {
      id: 2,
      name: "شقة حديثة",
      area: 150,
      price: 2000000,
      rooms: 2,
      street: 1,
      hall: 1,
      kitchen: 1,
      bathrooms: 2,
      balcony: 2,
      maid: 0,
      elevator: 1,
      driver: 0,
      warehouse: 0,
      image: [img, img, img, img],
    },
    {
      id: 2,
      name: "شقة حديثة",
      area: 150,
      price: 2000000,
      rooms: 2,
      street: 1,
      hall: 1,
      kitchen: 1,
      bathrooms: 2,
      balcony: 2,
      maid: 0,
      elevator: 1,
      driver: 0,
      warehouse: 0,
      image: [img, img, img, img],
    },
    // يمكن إضافة المزيد من المنتجات هنا
  ];

  return (
    <div className="p-4 ">
      <div className="sticky top-24  z-10 bg-gray-50">
        {" "}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4"> الوحدات المفضلة</h2>
          <h5 className=" font-bold mb-4">الاجمالي :2400 ريال</h5>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-2 gap-5 ">
          <div
            className="p-2 bg-yellow-700 rounded-xl text-center cursor-pointer text-gray-50 hover:bg-yellow-500"
            onClick={() => setFilter("all")}
          >
            <small>عرض الكل</small>
          </div>
          <div
            className="p-2 bg-yellow-700 hover:bg-yellow-500 rounded-xl text-center cursor-pointer text-gray-50"
            onClick={() => setFilter("شقه")}
          >
            <small>الشقق</small>
          </div>
          <div
            className="p-2 bg-yellow-700 hover:bg-yellow-500 rounded-xl text-center cursor-pointer text-gray-50"
            onClick={() => setFilter("villa-200-295")}
          >
            <small>فيلا 200~295</small>
          </div>
          <div
            className="p-2 bg-yellow-700 hover:bg-yellow-500 rounded-xl text-center cursor-pointer text-gray-50"
            onClick={() => setFilter("villa-300-450")}
          >
            <small>فيلا 300~450</small>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-md">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {product.image.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={imgSrc}
                    alt={product.name}
                    className="w-full h-56 object-cover rounded-lg mb-4"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-around items-center mb-2">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <Tooltip content="ازالة الوحدة من السلة">
                <FaHeart
                  size={"30px"}
                  className="text-red-500 cursor-pointer hover:text-black"
                />
              </Tooltip>
            </div>

            <div className="grid grid-cols-2 ">
              <p className="text-gray-500 mb-2">
                <GiResize className="inline-block mx-1 w-5 text-black" />
                المساحة: {product.area} متر مربع
              </p>
              <p className="text-gray-500 mb-2">السعر: {product.price} ريال</p>
              <p className="text-gray-500 mb-2">
                <MdMeetingRoom className="inline-block mx-1 w-5 text-black" />
                عدد الغرف: {product.rooms}
              </p>
              <p className="text-gray-500 mb-2">
                <TbToolsKitchen3 className="inline-block mx-1 w-5 text-black" />
                مطبخ: {product.kitchen}
              </p>
              <p className="text-gray-500 mb-2">
                <MdBalcony className="inline-block mx-1 w-5 text-black" />
                بلكونات: {product.balcony}
              </p>
              <p className="text-gray-500 mb-2">
                <FaCar className="inline-block mx-1 w-5 text-black" />
                سائق: {product.driver ? "نعم" : "لا"}
              </p>
              <p className="text-gray-500 mb-2">
                <GrElevator className="inline-block mx-1 w-5 text-black" />
                مصعد: {product.elevator ? "نعم" : "لا"}
              </p>
              <p className="text-gray-500 mb-2">
                <RiRobot3Fill className="inline-block mx-1 w-5 text-black" />
                خادمة: {product.maid ? "نعم" : "لا"}
              </p>
              <p className="text-gray-500 mb-2">
                <PiWarehouseBold className="inline-block mx-1 w-5 text-black" />
                مستودع: {product.warehouse ? "نعم" : "لا"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
