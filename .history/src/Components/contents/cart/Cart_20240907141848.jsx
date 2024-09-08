import { FaHeart } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { MdMeetingRoom, MdBalcony } from "react-icons/md";
import { GiDoubleStreetLights, GiResize } from "react-icons/gi";
import { RiRobot3Fill } from "react-icons/ri";
import { PiWarehouseBold } from "react-icons/pi";
import { FaCar } from "react-icons/fa";
import { GrElevator } from "react-icons/gr";
import img from "../../../assets/available/image10.jpg";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Cart = () => {
  const products = [
    {
      id: 1,
      name: "فيلا فاخرة",
      area: 300,
      price: 5000000,
      rooms:1,
      street:1,
      hall:1,
      image: { img }, // ضع رابط الصورة الصحيح هنا
    },
    {
      id: 2,
      name: "شقة",
      area: 120,
      price: 1000000,
      image: { img },
    },
    {
      id: 3,
      name: "بيت مستقل",
      area: 200,
      price: 3000000,
      image: { img },
    },
  ];
  return (
    // <div className="p-4">
    //   <h2 className="text-2xl font-bold mb-4">سلة الوحدات المفضلة</h2>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {products.map((product) => (
    //       <div key={product.id} className="border rounded-lg p-4 shadow-md">
    //         <img
    //           src={img}
    //           alt={product.name}
    //           className="w-full h-56 object-cover rounded-lg mb-4"
    //         />
    //         <div className="flex justify-around items-center">
    //           <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
    //           <FaHeart className="text-red-500 cursor-pointer" />
    //         </div>

    //         <div className="grid grid-cols-2 text-center">
    //           {" "}
    //           <p className="text-gray-500 mb-2">
    //           <GiResize className="inline-block mx-1 md:mx-0.5 w-5 text-black" /> المساحة: {product.area} متر مربع
    //           </p>
    //           <p className="text-gray-500 mb-2">
    //             السعر: {product.price} ريال
    //           </p>
    //           <p className="text-gray-500 mb-2">
    //             المساحة: {product.area} متر مربع
    //           </p>
    //           <p className="text-gray-500 mb-2">
    //             المساحة: {product.area} متر مربع
    //           </p>
    //           <p className="text-gray-500 mb-2">
    //             المساحة: {product.area} متر مربع
    //           </p>
    //           <p className="text-gray-900 font-bold">
    //             السعر: {product.price} جنيه
    //           </p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
 
  
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
                {DetailsModel.data && DetailsModel.data.images ? (
                  DetailsModel.data.images.map((image) => (
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
                      <span className="text-orange-500">فيلا</span>
                      الموافقة
                    </span>
                  </h3>
                </div>
                <div className="text-lg xl:text-xl px-3 md:px-2 lg:px-3 flex justify-between">
                  <label className="whitespace-nowrap font-bold text-black dark:text-white flex items-end mt-2 font-acumin-pro">
                    <span className="text-orange-500">
                      {DetailsModel.data?.price}
                    </span>
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
                      <span className="text-orange-500">
                        {DetailsModel.data?.area}
                      </span>
                    </li>
                    <li className="p-2">
                      <TbToolsKitchen3 className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                      <span className="text-sm">مطبخ:</span>
                      <span className="text-orange-500">
                        {DetailsModel.data?.kitchen}
                      </span>
                    </li>

                    <li className="p-2">
                      <MdMeetingRoom className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                      <span className="text-sm">عدد الغرف:</span>
                      <span className="text-orange-500">
                        {DetailsModel.data?.rooms}
                      </span>
                    </li>
                    <li className="p-2">
                      <GiDoubleStreetLights className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                      <span className="text-sm">الشارع:</span>
                      <span className="text-orange-500">
                        {DetailsModel.data?.street}
                      </span>
                    </li>

                    <li className="p-2">
                      <MdBalcony className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                      <span className="text-sm">عدد البلكونات:</span>
                      <span className="text-orange-500">
                        {DetailsModel.data?.balcony}
                      </span>
                    </li>
                    <li className="p-2">
                      <MdBalcony className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                      <span className="text-sm">عدد الصالات:</span>
                      <span className="text-orange-500">
                        {DetailsModel.data?.hall}
                      </span>
                    </li>
                    <li className="p-2">
                      <RiRobot3Fill className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                      <span className="text-sm">غرفه خادمه:</span>
                      <span className="text-orange-500">
                        {DetailsModel.data?.maid ? "نعم" : "لا"}
                      </span>
                    </li>
                    <li className="p-2">
                      <PiWarehouseBold className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                      <span className="text-sm">غرفه حارس:</span>
                      <span className="text-orange-500">
                        {DetailsModel.data?.warehouse ? "نعم" : "لا"}
                      </span>
                    </li>
                    <li className="p-2">
                      <FaCar className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                      <span className="text-sm">غرفه سائق:</span>
                      <span className="text-orange-500">
                        {DetailsModel.data?.driver ? "نعم" : "لا"}
                      </span>
                    </li>
                    <li className="p-2">
                      <GrElevator className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                      <span className="text-sm">مصعد:</span>
                      <span className="text-orange-500">
                        {DetailsModel.data?.elevator ? "نعم" : "لا"}
                      </span>
                    </li>
                    <li className="p-2">
                      <IoHome className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                      <span className="text-sm">النوع:</span>
                      <span className="text-orange-500">
                        {DetailsModel.data?.kind === "apartment"
                          ? "شقة"
                          : "فيلا"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Cart;
