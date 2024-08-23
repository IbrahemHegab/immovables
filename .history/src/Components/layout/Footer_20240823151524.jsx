import React from "react";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-black bg-logo bg-[length:200px] bg-left-bottom bg-repeat-x font-content">
      <div className="mx-auto max-w-screen-xl py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <a className="flex items-center">
              <img
                src={logo}
                className="mr-3 h-16 invert brightness-0"
                alt=" Logo"
              />
            </a>
            <p className="max-w-[440px] text-sm text-gray-100 p-3 block">
              نهتم في الموافقة ريزيدنس بإثبات دورنا الفعّال وحِرصِنا على تقديم
              تسهيلات تُساهم في تحقيق الرؤية 2030 م. بدايةً من اهتمامنا باختيار
              مُخططات ذات بنية تحتية مُتكاملة ومُجهزة لمُباشرة البناء.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 px-4">
            <div>
              <h2 className="mb-2 lg:mb-6 text-base lg:text-xl font-ge-dinar-medium text-gray-100">
                روابط هامة
              </h2>
              <ul className="text-gray-200 dark:text-gray-400">
                <li className="mb-2">
                  <a className="text-gray-200" aria-current="page" href="#">
                    المشاريع
                  </a>
                </li>

                <li className="mb-2">
                  <a className="text-gray-200" aria-current="page" href="#">
                    من نحن
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-gray-200 text-sm font-acumin-pro ">
                  <a
                    style={{
                      backgroundColor: 'rgba(255, 255, 255,
                      position: "fixed",
                      bottom: "10px",
                      right: "10px",
                      zIndex: 20,
                    }}
                  >
                    <span>حياك الله تواصل معنا </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="whatsapp-ico mx-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-full lg:col-span-1">
              <h2 className="mb-2 lg:mb-6 text-base lg:text-xl font-ge-dinar-medium text-gray-100">
                تابعنا على
              </h2>
              <div className="flex w-full rtl:space-x-reverse space-x-3 text-gray-200">
                <a target="_blank" href="#">
                  <img
                    src="https://almajdiah.com/images/twitter.png"
                    className="w-7 invert brightness-0"
                    alt="#"
                  />
                </a>
                <a target="_blank" href="#">
                  <img
                    src="https://almajdiah.com/images/youtube.png"
                    className="w-7 invert brightness-0"
                    alt="almajdiah youtube"
                  />
                </a>
                <a target="_blank" href="#">
                  <img
                    src="https://almajdiah.com/images/instagram.png"
                    className="w-7 invert brightness-0"
                    alt="almajdiah instagram"
                  />
                </a>
                <a target="_blank" href="#">
                  <img
                    src="https://almajdiah.com/images/linkedin.png"
                    className="w-7 invert brightness-0"
                    alt="almajdiah linkedin"
                  />
                </a>
                <a target="_blank" href="#">
                  <img
                    src="https://almajdiah.com/images/snap.png"
                    className="w-7 invert brightness-0"
                    alt="almajdiah snapchat"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:items-center sm:justify-between bg-black bg-waves">
        <div className="container m-auto text-center py-4">
          <span className="text-sm text-gray-200">
            جميع الحقوق محفوظة © <span className="font-acumin-pro">2022</span>
            <a className="hover:underline">الموافقة ريزدنس</a>.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
