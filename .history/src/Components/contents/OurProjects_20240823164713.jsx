import { useState } from "react";
import room from "../../assets/available/image10.jpg";
import { Button, Dropdown } from "flowbite-react";
import { TbToolsKitchen3 } from "react-icons/tb";
import { MdHolidayVillage, MdMeetingRoom } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getGallery } from "../store/Gallerys/gallerySlice";
import { IoHome } from "react-icons/io5";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { DetaildModel } from "./DetailsModel";
import { setOpenDetailsModel } from "../store/SharedStore";
const OurProjects = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.gallery);
  const [selectedType, setSelectedType] = useState(""); // لتخزين نوع العقار المختار
  const [selectedAll, setSelectedAll] = useState(""); // لتخزين نوع العقار المختار
  const [selectedRooms, setSelectedRooms] = useState(""); // لتخزين عدد الغرف المختار
  const [selectedShow] = useState(true); // لتخزين المساحة المختارة
  const [selectedHall, setSelectedHall] = useState(""); // لتخزين المساحة المختارة
  const [minPrice, setMinPrice] = useState(""); // لتخزين السعر الأكبر من
  const [maxPrice, setMaxPrice] = useState(""); // لتخزين السعر الأقل من
  const handelDetails = (id) => {
    dispatch(setOpenDetailsModel({ data: id, status: true }));
  };
  const filteredData = data.filter((e) => {
    return (
      (selectedAll ==="all" data) &&
      (!selectedType || e.kind === selectedType) &&
      (!selectedRooms || e.rooms === Number(selectedRooms)) &&
      (!selectedHall || e.hall === Number(selectedHall)) &&
      (!selectedShow || e.show === true) &&
      (!minPrice || e.price >= Number(minPrice)) &&
      (!maxPrice || e.price <= Number(maxPrice))
    );
  });
  useEffect(() => {
    dispatch(getGallery());
  }, [dispatch]);

  return (
    <section className="my-8">
      <div className="md:container px-4 m-auto">
        <div className="text-center mb-3 lg:mb-5">
          <svg
            className="inline-block w-6 h-6 lg:w-10 lg:h-10"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="17.433"
            viewBox="0 0 12 17.433"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_14058"
                  data-name="Rectangle 14058"
                  width="12"
                  height="17.433"
                  fill="none"
                  stroke="#707070"
                  strokeWidth="0.75"
                ></rect>
              </clipPath>
            </defs>
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
          <h1 className="inline-block text-xl font-header md:text-2xl px-1.5 lg:text-4xl font-ge-dinar-medium leading-none text-black dark:text-white">
            مشاريعنا
          </h1>
        </div>
        <div className="grid lg:grid-cols-6 grid-cols-2 sm:grid-cols-2 gap-3 justify-center pb-5 lg:pb-6">
          <Button
            className="mx-2 items-center"
            color="warning"
            onClick={() => setSelectedAll("all")}
          >
            الكل
          </Button>
          <div className="border rounded-lg border-gray-400">
            <Dropdown
              color={"transparent"}
              label="النوع"
              dismissOnClick={false}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <Dropdown.Item onClick={() => setSelectedType("apartment")}>
                شقه
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  setSelectedType("villa-200-295" || "villa-300-450")
                }
              >
                فيلا
              </Dropdown.Item>
            </Dropdown>
          </div>
          <div className="border rounded-lg border-gray-400">
            <Dropdown
              color={"transparent"}
              label="عدد الغرف"
              dismissOnClick={false}
            >
              <Dropdown.Item onClick={() => setSelectedRooms("1")}>
                1
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedRooms("2")}>
                2
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedRooms("3")}>
                3
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedRooms("4")}>
                4
              </Dropdown.Item>
            </Dropdown>
          </div>
          <div className="border rounded-lg border-gray-400">
            <Dropdown
              color={"transparent"}
              label="عدد الصالات"
              dismissOnClick={false}
            >
              <Dropdown.Item onClick={() => setSelectedHall("1")}>
                1
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedHall("2")}>
                2
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedHall("3")}>
                3
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedHall("4")}>
                4
              </Dropdown.Item>
            </Dropdown>
          </div>

          <input
            type="number"
            className="border rounded-lg"
            placeholder="السعر اكبر من؟"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          {/* إدخال السعر "أقل من" */}
          <input
            type="number"
            className="border rounded-lg"
            placeholder="السعر اقل من؟"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {filteredData.length > 0
            ? filteredData.map((e) => (
                <div className="gap-4" key={e._id}>
                  <div className="relative">
                    <div className="leading-7 bg-white dark:bg-black shadow-md cursor-pointer overflow-hidden rounded-tl-lg rounded-tr-lg">
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
                        {e && e.images ? (
                          e.images.map((image) => (
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
                              {e.kind === "apartment" ? "شقة" : "فيلا"} الموافقة
                            </span>
                          </h3>
                        </div>
                        <div className="text-lg xl:text-xl px-3 md:px-2 lg:px-3 flex justify-between">
                          <label className="whitespace-nowrap font-bold text-black dark:text-white flex items-end mt-2 font-acumin-pro">
                            <span className="">{e.price}</span>
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
                                {e.area}
                              </li>
                              <li>
                                <TbToolsKitchen3 className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                                <span className="text-sm">مطبخ:</span>
                                {e.kitchen}
                              </li>
                            </div>
                            <div>
                              <li>
                                <MdMeetingRoom className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                                <span className="text-sm">عدد الغرف:</span>
                                {e.rooms}
                              </li>
                              <li>
                                <MdHolidayVillage className="inline-block mx-1 md:mx-0.5 w-5 text-black" />
                                <span className="text-sm">النوع:</span>فيلا
                              </li>
                            </div>
                          </ul>
                        </div>
                        <span
                          onClick={() => handelDetails(e)}
                          className="w-full block text-white text-center bg-yellow-500 py-2 text-sm xl:text-base hover:bg-primary-300"
                        >
                          إضغط لتفاصيل أكثر
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "لا يوجد مشاريع بناءً على المعايير المختارة"}
        </div>
      </div>
      <DetaildModel />
    </section>
  );
};

export default OurProjects;
