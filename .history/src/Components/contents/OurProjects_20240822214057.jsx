import { useState } from "react";
import project from "../../assets/available/image10.jpg"
import project1 from "../../assets/available/image10.jpg"
import project2 from "../../assets/available/image10.jpg"
import project3 from "../../assets/available/image10.jpg"
import { Dropdown } from "flowbite-react";
import { TbToolsKitchen3 } from "react-icons/tb";
import { MdHolidayVillage, MdMeetingRoom } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGallery } from "../store/Gallerys/gallerySlice";
import { IoHome } from "react-icons/io5";
const OurProjects = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.gallery);

  const [selectedType, setSelectedType] = useState(""); // لتخزين نوع العقار المختار
  const [selectedRooms, setSelectedRooms] = useState(""); // لتخزين عدد الغرف المختار
  const [selectedHall, setSelectedHall] = useState(""); // لتخزين المساحة المختارة
  const [minPrice, setMinPrice] = useState(""); // لتخزين السعر الأكبر من
  const [maxPrice, setMaxPrice] = useState(""); // لتخزين السعر الأقل من
  useEffect(() => {
    dispatch(getGallery());
  }, [dispatch]);

  const filteredData = data.filter((e) => {
    return (
      (!selectedType || e.kind === selectedType) &&
      (!selectedRooms || e.rooms === Number(selectedRooms)) &&
      (!selectedHall || e.hall === Number(selectedHall)) &&
      (!minPrice || e.price >= Number(minPrice)) &&
      (!maxPrice || e.price <= Number(maxPrice))
    );
  });

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
        <div className="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-2 gap-3 justify-center pb-5 lg:pb-6">
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
                    

<div id="indicators-carousel" class="relative w-full" data-carousel="static">
   
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
       
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?rs=1&pid=ImgDetMain" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
       
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?rs=1&pid=ImgDetMain" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
      
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?rs=1&pid=ImgDetMain" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?rs=1&pid=ImgDetMain" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    </div>
  
    <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

                      <div className="flex flex-col justify-between h-full">
                        <div></div>
                        <div className="flex items-center justify-between p-3 md:p-2 lg:p-3">
                          <h3 className="font-ge-dinar-medium text-xl xl:text-[1.6rem] text-secondary-800 dark:text-secondary-200">
                          <IoHome className="inline-block mx-1 md:mx-0.5 w-5 text-black"/>
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
                        <span className="w-full block text-white text-center bg-yellow-500 py-2 text-sm xl:text-base hover:bg-primary-300">
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
    </section>
  );
};

export default OurProjects;
