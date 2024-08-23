import React from "react";
import project1 from "../../assets/available/image10.jpg";
import project2 from "../../assets/available/image11.jpg";
import project3 from "../../assets/available/image3.jpg";
import project4 from "../../assets/available/image4.jpg";
import project5 from "../../assets/available/image5.jpg";
import project6 from "../../assets/available/image6.jpg";
import { Dropdown } from "flowbite-react";
import { MdOutlinePriceChange } from "react-icons/md";
const OurProjects = () => {
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

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


            
            <div class="relative">
              <div class="leading-7 bg-white dark:bg-black shadow-md cursor-pointer overflow-hidden rounded-tl-lg rounded-tr-lg">
                <img
                  src={project2}
                  alt="الموافقة ريزدنس 155"
                  className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                />

                <div class="flex flex-col justify-between h-full">
                  <div></div>
                  <div class="flex items-center justify-between p-3 md:p-2 lg:p-3">
                    <h3 class="font-ge-dinar-medium text-xl xl:text-[1.6rem] text-secondary-800 dark:text-secondary-200">
                      <span>
                        الماجدية ريزدنس <span class="font-analogue">132</span> -
                        C <span class="font-analogue">16</span>
                      </span>
                    </h3>
                  </div>
                  <div class="text-lg xl:text-xl px-3 md:px-2 lg:px-3 flex justify-between">
                    <label class="whitespace-nowrap font-bold text-black dark:text-white flex items-end mt-2 font-acumin-pro">
                      <span class="">75,000</span>
                      <span class="text-base font-normal font-sans px-1">
                        ريال
                      </span>
                    </label>
                    <div class="text-base">
                      <b>الحي:</b>
                      <span class="">المروج</span>
                    </div>
                  </div>
                  <div class="text-black dark:text-white text-base lg:text-lg font-normal py-2 px-2 md:px-2 lg:px-3">
                    <ul class="flex justify-between p-0 m-0">
                      <div>
                        <li>
                          <svg
                            class="inline-block w-5 mx-1 md:mx-0.5 text-secondary-500"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 16L2 19"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M12 13V7C12 5.89543 12.8954 5 14 5L18 5C19.1046 5 20 5.89543 20 7V9"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M12 13V7C12 5.89543 11.1046 5 10 5L6 5C4.89543 5 4 5.89543 4 7V9"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M20 9C18.8954 9 18 9.89543 18 11V13H6V11C6 9.89543 5.10457 9 4 9C2.89543 9 2 9.89543 2 11V17H22V11C22 9.89543 21.1046 9 20 9Z"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M22 16L22 19"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span class="text-sm">مؤثثة:</span>
                          <svg
                            class="inline-block h-6 text-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                          >
                            <path d="M354 671h58.9c4.7 0 9.2-2.1 12.3-5.7L512 561.8l86.8 103.5c3 3.6 7.5 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.4-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.7 0-9.2 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3-3.6-7.5-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 0 0 354 671z"></path>
                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            class="inline-block mx-1 md:mx-0.5 w-5 text-black"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 122.88 102.18"
                            xml:space="preserve"
                          >
                            <g>
                              <path
                                d="M0,0h119.01c0.47,0,0.92,0.09,1.33,0.27c0.58,0.25,1.67,1.34,1.9,1.91c0.17,0.41,0.27,0.86,0.27,1.33v23.72 c0,0.47-0.09,0.92-0.27,1.34c-0.18,0.43-0.44,0.81-0.76,1.14l-0.04,0.03c-0.32,0.31-0.69,0.56-1.1,0.73 c-0.41,0.17-0.86,0.27-1.33,0.27H70.58c-0.15,0-0.26-0.12-0.26-0.26V4.13H32.58v6.89L44.87,25c0.35,0.4,0.51,0.9,0.48,1.4 c-0.03,0.49-0.25,0.97-0.65,1.33l-0.02,0.01c-0.18,0.15-0.37,0.27-0.58,0.34c-0.21,0.08-0.44,0.12-0.66,0.12H6.52 c-0.53,0-1.02-0.22-1.36-0.57c-0.35-0.35-0.57-0.83-0.57-1.36c0-0.28,0.06-0.54,0.17-0.78c0.11-0.25,0.27-0.47,0.47-0.65 l12.65-13.83V4.13H0V0L0,0z M31.55,58.58c1.14,0,2.07,0.93,2.07,2.07s-0.93,2.07-2.07,2.07c-1.14,0-2.07-0.93-2.07-2.07 S30.41,58.58,31.55,58.58L31.55,58.58z M18.35,58.58c1.14,0,2.07,0.93,2.07,2.07s-0.93,2.07-2.07,2.07s-2.07-0.93-2.07-2.07 S17.21,58.58,18.35,58.58L18.35,58.58z M32.62,47.47v2.19h0v2.9h86.77c1.92,0,3.5,1.58,3.5,3.5v42.62c0,1.92-1.57,3.5-3.49,3.5 c-38.6,0-77.18,0-115.79,0c-1.91,0-3.5-1.59-3.5-3.5V56.06c0-1.93,1.57-3.5,3.5-3.5h13.68c0-1.7,0-3.39,0-5.09h4.55v2.19h-2.08v2.9 h10.4v-2.9h-2.08v-2.19H32.62L32.62,47.47z M119.02,56.42H89.4v41.9h29.63V56.42L119.02,56.42L119.02,56.42z M85.54,56.42H46.77 v9.33h38.77V56.42L85.54,56.42L85.54,56.42z M42.91,56.42H3.96v41.9h38.95V56.42L42.91,56.42L42.91,56.42z M46.77,98.31h38.77 v-28.7H46.77V98.31L46.77,98.31L46.77,98.31z M94,58.58c0.28,0,0.55,0.06,0.79,0.16l0.01,0.01c0.25,0.1,0.47,0.26,0.66,0.44 c0.19,0.19,0.34,0.42,0.45,0.67c0.1,0.24,0.16,0.51,0.16,0.79s-0.06,0.54-0.16,0.79c-0.11,0.25-0.26,0.48-0.45,0.67l-0.02,0.01 c-0.19,0.18-0.41,0.33-0.66,0.43c-0.24,0.1-0.51
           ,0.16-0.79,0.16c-0.28,0-0.55-0.06-0.79-0.16c-0.24-0.1-0.46-0.25-0.65-0.43 l-0.03-0.02c-0.19-0.19-0.34-0.42-0.44-0.67l-0.01-0.01c-0.1-0.24-0.15-0.5-0.15-0.78c0-0.28,0.06-0.55,0.16-0.79 c0.1-0.25,0.26-0.48,0.45-0.67s0.42-0.34,0.67-0.45l0.01-0.01C93.47,58.63,93.73,58.58,94,58.58L94,58.58L94,58.58z M74.31,4.13 h-0.13v22.73h44.49V4.13H74.31L74.31,4.13L74.31,4.13z M78.11,6.66c0.19-0.18,0.41-0.33,0.66-0.43c0.24-0.1,0.51-0.16,0.79-0.16 c0.28,0,0.55,0.06,0.79,0.16l0.01,0.01c0.25,0.1,0.47,0.26,0.66,0.44c0.19,0.19,0.34,0.42,0.45,0.67c0.1,0.24,0.16,0.51,0.16,0.79 s-0.06,0.55-0.16,0.79l-0.01,0.01c-0.1,0.24-0.25,0.46-0.43,0.64l-0.03,0.03c-0.19,0.18-0.41,0.33-0.65,0.43 c-0.24,0.1-0.51,0.16-0.79,0.16c-0.28,0-0.55-0.06-0.79-0.16c-0.25-0.1-0.48-0.26-0.67-0.45l0,0c-0.19-0.19-0.34-0.42-0.45-0.67 c-0.1-0.24-0.16-0.51-0.16-0.79s0.06-0.54,0.16-0.79c0.11-0.25,0.26-0.48,0.45-0.67L78.11,6.66L78.11,6.66L78.11,6.66z"
                              ></path>
                            </g>
                          </svg>
                          <span class="text-sm">مطبخ:</span>
                          <svg
                            class="inline-block h-6 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-labelledby="checkboxIconTitle"
                            fill="none"
                            stroke="currentColor"
                          >
                            <title id="checkboxIconTitle">
                              Checkbox (selected)
                            </title>
                            <rect
                              x="21"
                              y="3"
                              width="18"
                              height="18"
                              rx="1"
                              transform="rotate(90 21 3)"
                            ></rect>
                            <path d="M6.66666 12.6667L9.99999 16L17.3333 8.66669"></path>
                          </svg>
                        </li>
                      </div>
                      <div>
                        <li>
                          <span class="text-sm">غرف النوم:</span>{" "}
                          <span class="font-acumin-pro">2</span>
                        </li>
                        <li>
                          <span class="text-sm">الدور:</span>
                          <span class="font-acumin-pro text-base font-semibold">
                            الطابق الثاني
                          </span>
                        </li>
                      </div>
                    </ul>
                  </div>
                  <span class="w-full block text-center bg-primary-200 py-1 text-sm xl:text-base hover:bg-primary-300">
                    إضغط لتفاصيل أكثر
                  </span>
                </div>
              </div>
            </div>

            <div className="group shadow bg-white overflow-hidden rounded-lg">
              <a className="block mb-2 text-secondary-500">
                <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                  <img
                    src={project2}
                    alt="الموافقة ريزدنس 155"
                    className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                  />
                  <div></div>
                </div>
                <div className="py-2 px-3 flex justify-between items-center">
                  <div className="flex content-center items-center">
                    <span className="font-medium text-2xl italic text-gray-900">
                      الموافقة
                    </span>
                    <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                      155
                    </span>
                  </div>
                  <div className="text-primary-500">
                    <svg
                      className="w-3 xl:w-6 xl:h-6 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.799"
                      height="17.247"
                      viewBox="0 0 10.799 17.247"
                    >
                      <defs>
                        <clipPath id="clip-path">
                          <rect
                            id="Rectangle_13947"
                            data-name="Rectangle 13947"
                            width="10.799"
                            height="17.247"
                            fill="currentColor"
                          ></rect>
                        </clipPath>
                      </defs>
                      <g
                        id="Group_11453"
                        data-name="Group 11453"
                        transform="translate(0 0)"
                      >
                        <g
                          id="Group_11452"
                          data-name="Group 11452"
                          transform="translate(0 0)"
                          clipPath="url(#clip-path)"
                        >
                          <path
                            id="Path_71"
                            data-name="Path 71"
                            d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                            transform="translate(0 0)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                      الرياض - عرقة
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="group shadow bg-white overflow-hidden rounded-lg">
              <a className="block mb-2 text-secondary-500">
                <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                  <img
                    src={project3}
                    alt="الموافقة ريزدنس 147"
                    className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                  />
                  <div>
                    <div></div>
                  </div>
                </div>
                <div className="py-2 px-3 flex justify-between items-center">
                  <div className="flex content-center items-center">
                    <span className="font-medium text-2xl italic text-gray-900">
                      الموافقة
                    </span>
                    <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                      147
                    </span>
                  </div>
                  <div className="text-primary-500">
                    <svg
                      className="w-3 xl:w-6 xl:h-6 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.799"
                      height="17.247"
                      viewBox="0 0 10.799 17.247"
                    >
                      <defs>
                        <clipPath id="clip-path">
                          <rect
                            id="Rectangle_13947"
                            data-name="Rectangle 13947"
                            width="10.799"
                            height="17.247"
                            fill="currentColor"
                          ></rect>
                        </clipPath>
                      </defs>
                      <g
                        id="Group_11453"
                        data-name="Group 11453"
                        transform="translate(0 0)"
                      >
                        <g
                          id="Group_11452"
                          data-name="Group 11452"
                          transform="translate(0 0)"
                          clipPath="url(#clip-path)"
                        >
                          <path
                            id="Path_71"
                            data-name="Path 71"
                            d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                            transform="translate(0 0)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                      الرياض - النرجس
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="group shadow bg-white overflow-hidden rounded-lg">
              <a className="block mb-2 text-secondary-500">
                <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                  <img
                    src={project4}
                    alt="الموافقة ريزدنس 146"
                    className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                  />
                  <img
                    src="https://almajdiah.com/images/discount_label.png"
                    alt="project sold"
                    className="absolute -top-1 -left-2 m-auto w-36"
                  />
                </div>
                <div className="py-2 px-3 flex justify-between items-center">
                  <div className="flex content-center items-center">
                    <span className="font-medium text-2xl italic text-gray-900">
                      الموافقة
                    </span>
                    <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                      146
                    </span>
                  </div>
                  <div className="text-primary-500">
                    <svg
                      className="w-3 xl:w-6 xl:h-6 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.799"
                      height="17.247"
                      viewBox="0 0 10.799 17.247"
                    >
                      <defs>
                        <clipPath id="clip-path">
                          <rect
                            id="Rectangle_13947"
                            data-name="Rectangle 13947"
                            width="10.799"
                            height="17.247"
                            fill="currentColor"
                          ></rect>
                        </clipPath>
                      </defs>
                      <g
                        id="Group_11453"
                        data-name="Group 11453"
                        transform="translate(0 0)"
                      >
                        <g
                          id="Group_11452"
                          data-name="Group 11452"
                          transform="translate(0 0)"
                          clipPath="url(#clip-path)"
                        >
                          <path
                            id="Path_71"
                            data-name="Path 71"
                            d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                            transform="translate(0 0)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                      الرياض - النرجس
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="group shadow bg-white overflow-hidden rounded-lg">
              <a className="block mb-2 text-secondary-500">
                <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                  <img
                    src={project5}
                    alt="الموافقة ريزدنس 144"
                    className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                  />
                  <div>
                    <img
                      src="https://almajdiah.com/images/project-state-on_map-ar.png"
                      alt="project sale on map"
                      className="absolute -left-2 -top-2 w-36"
                    />
                  </div>
                </div>
                <div className="py-2 px-3 flex justify-between items-center">
                  <div className="flex content-center items-center">
                    <span className="font-medium text-2xl italic text-gray-900">
                      الموافقة
                    </span>
                    <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                      144
                    </span>
                  </div>
                  <div className="text-primary-500">
                    <svg
                      className="w-3 xl:w-6 xl:h-6 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.799"
                      height="17.247"
                      viewBox="0 0 10.799 17.247"
                    >
                      <defs>
                        <clipPath id="clip-path">
                          <rect
                            id="Rectangle_13947"
                            data-name="Rectangle 13947"
                            width="10.799"
                            height="17.247"
                            fill="currentColor"
                          ></rect>
                        </clipPath>
                      </defs>
                      <g
                        id="Group_11453"
                        data-name="Group 11453"
                        transform="translate(0 0)"
                      >
                        <g
                          id="Group_11452"
                          data-name="Group 11452"
                          transform="translate(0 0)"
                          clipPath="url(#clip-path)"
                        >
                          <path
                            id="Path_71"
                            data-name="Path 71"
                            d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                            transform="translate(0 0)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                      الرياض - النرجس
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="group shadow bg-white overflow-hidden rounded-lg">
              <a className="block mb-2 text-secondary-500">
                <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                  <img
                    src={project6}
                    alt="الموافقة ريزدنس 143"
                    className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                  />
                  <img
                    src="https://almajdiah.com/images/discount_label.png"
                    alt="project sold"
                    className="absolute -top-1 -left-2 m-auto w-36"
                  />
                </div>
                <div className="py-2 px-3 flex justify-between items-center">
                  <div className="flex content-center items-center">
                    <span className="font-medium text-2xl italic text-gray-900">
                      الموافقة
                    </span>
                    <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                      143
                    </span>
                  </div>
                  <div className="text-primary-500">
                    <svg
                      className="w-3 xl:w-6 xl:h-6 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.799"
                      height="17.247"
                      viewBox="0 0 10.799 17.247"
                    >
                      <defs>
                        <clipPath id="clip-path">
                          <rect
                            id="Rectangle_13947"
                            data-name="Rectangle 13947"
                            width="10.799"
                            height="17.247"
                            fill="currentColor"
                          ></rect>
                        </clipPath>
                      </defs>
                      <g
                        id="Group_11453"
                        data-name="Group 11453"
                        transform="translate(0 0)"
                      >
                        <g
                          id="Group_11452"
                          data-name="Group 11452"
                          transform="translate(0 0)"
                          clipPath="url(#clip-path)"
                        >
                          <path
                            id="Path_71"
                            data-name="Path 71"
                            d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                            transform="translate(0 0)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                      الرياض - الحمراء
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="group shadow bg-white overflow-hidden rounded-lg">
              <a className="block mb-2 text-secondary-500">
                <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                  <img
                    src={project1}
                    alt="الموافقة ريزدنس 140"
                    className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                  />
                  <div>
                    <img
                      src="https://almajdiah.com/images/project-state-on_map-ar.png"
                      alt="project sale on map"
                      className="absolute -left-2 -top-2 w-36"
                    />
                  </div>
                </div>
                <div className="py-2 px-3 flex justify-between items-center">
                  <div className="flex content-center items-center">
                    <span className="font-medium text-2xl italic text-gray-900">
                      الموافقة
                    </span>
                    <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                      140
                    </span>
                  </div>
                  <div className="text-primary-500">
                    <svg
                      className="w-3 xl:w-6 xl:h-6 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.799"
                      height="17.247"
                      viewBox="0 0 10.799 17.247"
                    >
                      <defs>
                        <clipPath id="clip-path">
                          <rect
                            id="Rectangle_13947"
                            data-name="Rectangle 13947"
                            width="10.799"
                            height="17.247"
                            fill="currentColor"
                          ></rect>
                        </clipPath>
                      </defs>
                      <g
                        id="Group_11453"
                        data-name="Group 11453"
                        transform="translate(0 0)"
                      >
                        <g
                          id="Group_11452"
                          data-name="Group 11452"
                          transform="translate(0 0)"
                          clipPath="url(#clip-path)"
                        >
                          <path
                            id="Path_71"
                            data-name="Path 71"
                            d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                            transform="translate(0 0)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                      الرياض - النرجس
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="group shadow bg-white overflow-hidden rounded-lg">
              <a className="block mb-2 text-secondary-500">
                <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                  <img
                    src={project2}
                    alt="الموافقة ريزدنس 139C"
                    className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                  />
                  <div>
                    <div></div>
                  </div>
                </div>
                <div className="py-2 px-3 flex justify-between items-center">
                  <div className="flex content-center items-center">
                    <span className="font-medium text-2xl italic text-gray-900">
                      الموافقة
                    </span>
                    <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                      139 C
                    </span>
                  </div>
                  <div className="text-primary-500">
                    <svg
                      className="w-3 xl:w-6 xl:h-6 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.799"
                      height="17.247"
                      viewBox="0 0 10.799 17.247"
                    >
                      <defs>
                        <clipPath id="clip-path">
                          <rect
                            id="Rectangle_13947"
                            data-name="Rectangle 13947"
                            width="10.799"
                            height="17.247"
                            fill="currentColor"
                          ></rect>
                        </clipPath>
                      </defs>
                      <g
                        id="Group_11453"
                        data-name="Group 11453"
                        transform="translate(0 0)"
                      >
                        <g
                          id="Group_11452"
                          data-name="Group 11452"
                          transform="translate(0 0)"
                          clipPath="url(#clip-path)"
                        >
                          <path
                            id="Path_71"
                            data-name="Path 71"
                            d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                            transform="translate(0 0)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                      الرياض - الملقا
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="group shadow bg-white overflow-hidden rounded-lg">
              <a className="block mb-2 text-secondary-500">
                <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                  <img
                    src={project3}
                    alt="الموافقة ريزدنس 138"
                    className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                  />
                  <img
                    src="https://almajdiah.com/images/discount_label.png"
                    alt="project sold"
                    className="absolute -top-1 -left-2 m-auto w-36"
                  />
                </div>
                <div className="py-2 px-3 flex justify-between items-center">
                  <div className="flex content-center items-center">
                    <span className="font-medium text-2xl italic text-gray-900">
                      الموافقة
                    </span>
                    <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                      138
                    </span>
                  </div>
                  <div className="text-primary-500">
                    <svg
                      className="w-3 xl:w-6 xl:h-6 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.799"
                      height="17.247"
                      viewBox="0 0 10.799 17.247"
                    >
                      <defs>
                        <clipPath id="clip-path">
                          <rect
                            id="Rectangle_13947"
                            data-name="Rectangle 13947"
                            width="10.799"
                            height="17.247"
                            fill="currentColor"
                          ></rect>
                        </clipPath>
                      </defs>
                      <g
                        id="Group_11453"
                        data-name="Group 11453"
                        transform="translate(0 0)"
                      >
                        <g
                          id="Group_11452"
                          data-name="Group 11452"
                          transform="translate(0 0)"
                          clipPath="url(#clip-path)"
                        >
                          <path
                            id="Path_71"
                            data-name="Path 71"
                            d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                            transform="translate(0 0)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                      الرياض - النزهة
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="group shadow bg-white overflow-hidden rounded-lg">
              <a className="block mb-2 text-secondary-500">
                <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                  <img
                    src={project5}
                    alt="الموافقة ريزدنس 132"
                    className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                  />
                  <div>
                    <div></div>
                  </div>
                </div>
                <div className="py-2 px-3 flex justify-between items-center">
                  <div className="flex content-center items-center">
                    <span className="font-medium text-2xl italic text-gray-900">
                      الموافقة
                    </span>
                    <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                      132
                    </span>
                  </div>
                  <div className="text-primary-500">
                    <svg
                      className="w-3 xl:w-6 xl:h-6 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.799"
                      height="17.247"
                      viewBox="0 0 10.799 17.247"
                    >
                      <defs>
                        <clipPath id="clip-path">
                          <rect
                            id="Rectangle_13947"
                            data-name="Rectangle 13947"
                            width="10.799"
                            height="17.247"
                            fill="currentColor"
                          ></rect>
                        </clipPath>
                      </defs>
                      <g
                        id="Group_11453"
                        data-name="Group 11453"
                        transform="translate(0 0)"
                      >
                        <g
                          id="Group_11452"
                          data-name="Group 11452"
                          transform="translate(0 0)"
                          clipPath="url(#clip-path)"
                        >
                          <path
                            id="Path_71"
                            data-name="Path 71"
                            d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                            transform="translate(0 0)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                      الرياض - المروج
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="group shadow bg-white overflow-hidden rounded-lg">
              <a className="block mb-2 text-secondary-500">
                <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                  <img
                    src={project6}
                    alt="الموافقة ريزدنس 129"
                    className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                  />
                  <img
                    src="https://almajdiah.com/images/discount_label.png"
                    alt="project sold"
                    className="absolute -top-1 -left-2 m-auto w-36"
                  />
                </div>
                <div className="py-2 px-3 flex justify-between items-center">
                  <div className="flex content-center items-center">
                    <span className="font-medium text-2xl italic text-gray-900">
                      الموافقة
                    </span>
                    <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                      129
                    </span>
                  </div>
                  <div className="text-primary-500">
                    <svg
                      className="w-3 xl:w-6 xl:h-6 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.799"
                      height="17.247"
                      viewBox="0 0 10.799 17.247"
                    >
                      <defs>
                        <clipPath id="clip-path">
                          <rect
                            id="Rectangle_13947"
                            data-name="Rectangle 13947"
                            width="10.799"
                            height="17.247"
                            fill="currentColor"
                          ></rect>
                        </clipPath>
                      </defs>
                      <g
                        id="Group_11453"
                        data-name="Group 11453"
                        transform="translate(0 0)"
                      >
                        <g
                          id="Group_11452"
                          data-name="Group 11452"
                          transform="translate(0 0)"
                          clipPath="url(#clip-path)"
                        >
                          <path
                            id="Path_71"
                            data-name="Path 71"
                            d="M5.311,17.247a12.373,12.373,0,0,0-2.191-5.43c-.653-.992-1.341-1.962-1.979-2.963A6.159,6.159,0,0,1,0,5.244,5.114,5.114,0,0,1,3.379.451a5.035,5.035,0,0,1,5.7,1.063,4.891,4.891,0,0,1,1.34,5.621,17.865,17.865,0,0,1-1.9,3.394,17,17,0,0,0-2.9,5.766c-.063.293-.125.587-.19.88,0,.015-.037.023-.118.072M8.22,5.4a2.832,2.832,0,1,0-2.8,2.882A2.826,2.826,0,0,0,8.22,5.4"
                            transform="translate(0 0)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <span className="text-sm font lg:text-base px-0.5 font-ge-dinar-medium">
                      الرياض - النرجس
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
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
