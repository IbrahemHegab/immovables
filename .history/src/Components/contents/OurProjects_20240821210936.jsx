import React from "react";
import project1 from "../../assets/available/image10.jpg"
import project2 from "../../assets/available/image11.jpg"
import project3 from "../../assets/available/image3.jpg"
import project4 from "../../assets/available/image4.jpg"
import project5 from "../../assets/available/image5.jpg"
import project6 from "../../assets/available/image6.jpg"
import { Dropdown } from "flowbite-react";
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
        <div className="flex items-center gap-3 justify-center pb-5 lg:pb-6">
        <Dropdown label="النوع" dismissOnClick={false}>
      <Dropdown.Item>شقه</Dropdown.Item>
      <Dropdown.Item>فيلا</Dropdown.Item>
    </Dropdown>
    <Dropdown label=" " dismissOnClick={false}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
    <Dropdown label="Dropdown button" dismissOnClick={false}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
        
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="group shadow bg-white overflow-hidden rounded-lg">
              <a
                className="block mb-2 text-secondary-500"
                href="https://almajdiah.com/projects/195"
              >
                <div className="rounded-tl-lg rounded-tr-lg cursor-pointer relative">
                  <img
                    src={project1}
                    alt="الموافقة ريزدنس 156"
                    className="w-full aspect-[5/3] text-blue-700 align-middle object-cover"
                  />
                  <div>
                    <div></div>
                  </div>
                </div>
                <div className="py-2 px-3 flex justify-between items-center">
                  <div className="flex content-center items-center">
                  <span className="font-medium text-2xl italic text-gray-900">الموافقة</span>
                    <span className="inline-block !font-analogue text-black dark:text-white text-2xl xs:text-3xl lg:text-[1.7rem] lg:leading-[1.3] xl:text-4xl px-2">
                      156
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
                      الرياض - الندى
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="group shadow bg-white overflow-hidden rounded-lg">
              <a
                className="block mb-2 text-secondary-500"
               
              >
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
                  <span className="font-medium text-2xl italic text-gray-900">الموافقة</span>
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
              <a
                className="block mb-2 text-secondary-500"
                
              >
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
                  <span className="font-medium text-2xl italic text-gray-900">الموافقة</span>
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
              <a
                className="block mb-2 text-secondary-500"
           
              >
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
                  <span className="font-medium text-2xl italic text-gray-900">الموافقة</span>
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
              <a
                className="block mb-2 text-secondary-500"
                
              >
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
                  <span className="font-medium text-2xl italic text-gray-900">الموافقة</span>
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
              <a
                className="block mb-2 text-secondary-500"
                
              >
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
                  <span className="font-medium text-2xl italic text-gray-900">الموافقة</span>
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
              <a
                className="block mb-2 text-secondary-500"
            
              >
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
                  <span className="font-medium text-2xl italic text-gray-900">الموافقة</span>
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
              <a
                className="block mb-2 text-secondary-500"
           
              >
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
                  <span className="font-medium text-2xl italic text-gray-900">الموافقة</span>
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
              <a
                className="block mb-2 text-secondary-500"
              
              >
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
                  <span className="font-medium text-2xl italic text-gray-900">الموافقة</span>
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
              <a
                className="block mb-2 text-secondary-500"
               
              >
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
                  <span className="font-medium text-2xl italic text-gray-900">الموافقة</span>
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
              <a
                className="block mb-2 text-secondary-500"
           
              >
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
                  <span className="font-medium text-2xl italic text-gray-900">الموافقة</span>
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
