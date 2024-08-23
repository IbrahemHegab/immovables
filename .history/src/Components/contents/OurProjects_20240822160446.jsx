import project2 from "../../assets/available/image11.jpg";

import { Dropdown } from "flowbite-react";
import { TbToolsKitchen3 } from "react-icons/tb";
import { MdHolidayVillage, MdMeetingRoom } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGallery } from "../store/Gallerys/gallerySlice";

const OurProjects = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.gallery);

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
        <div className="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-2 gap-3 justify-center pb-5 lg:pb-6">
          <div className="border rounded-lg border-gray-400">
            {" "}
            <Dropdown
              color={"transparent"}
              label="النوع"
              dismissOnClick={false}
            >
              <Dropdown.Item>شقه</Dropdown.Item>
              <Dropdown.Item>فيلا</Dropdown.Item>
            </Dropdown>
          </div>
          <div className="border rounded-lg border-gray-400">
            {" "}
            <Dropdown
              color={"transparent"}
              label="عدد الغرف"
              dismissOnClick={false}
            >
              <Dropdown.Item>1</Dropdown.Item>
              <Dropdown.Item>2</Dropdown.Item>
              <Dropdown.Item>3</Dropdown.Item>
              <Dropdown.Item>4</Dropdown.Item>
            </Dropdown>
          </div>
          <div className="border rounded-lg border-gray-400">
            {" "}
            <Dropdown
              color={"transparent"}
              label="المساحه"
              dismissOnClick={false}
            >
              <Dropdown.Item>1000</Dropdown.Item>
              <Dropdown.Item>1200</Dropdown.Item>
              <Dropdown.Item>1300</Dropdown.Item>
              <Dropdown.Item>1400</Dropdown.Item>
            </Dropdown>
          </div>

          <input
            type="number"
            className="border rounded-lg"
            placeholder="السعر اقل من؟"
          />
          <input
            type="number"
            className="border rounded-lg"
            placeholder="السعر اكبر من؟"
          />
        </div>
        <div  className="grid grid-cols-3 gap-3">
        {data.length > 0 && data
          ? data.map((e) => (
                <div className=" gap-4" key={e._id}>
                  <div className="relative">
                    <div className="leading-7 bg-white dark:bg-black shadow-md cursor-pointer overflow-hidden rounded-tl-lg rounded-tr-lg">
                      <img
                        src={e.images[0].image}
                        alt="الموافقة ريزدنس 155"
                        className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                      />

                      <div className="flex flex-col justify-between h-full">
                        <div></div>
                        <div className="flex items-center justify-between p-3 md:p-2 lg:p-3">
                          <h3 className="font-ge-dinar-medium text-xl xl:text-[1.6rem] text-secondary-800 dark:text-secondary-200">
                            <span>فيلا الموافقة</span>
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
            : "لايوجد وحدات معروضه "}
            </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
          <div className="mt-4 lg:my-8 text-center">
            <a
              className="text-black dark:text-white text-base lg:text-xl py-1 lg:py-2 px-4 lg:px-6 border border-black dark:border-white inline-block"
              href="#"
            >
              مزيد من المشاريع
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
