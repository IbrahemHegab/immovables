import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

const ConnectUs = () => {
  return (
    <div>
      <main className="font-content">
        <div className="bg-white text-black text-lg">
          <div className="md:container px-4 m-auto">
            <div className="flex-none px-4 py-8 w-full max-w-full">
              <div className="relative text-center">
                <h1 className="mx-0 mt-0 mb-2 text-3xl font-ge-dinar-medium text-black md:text-4xl lg:text-6xl">
                  تواصل معنا
                </h1>
                <div>
                  <nav className="">
                    <ul className="p-0 m-0">
                      <li className="inline-block my-0 mx-1">
                        <a
                          href="#"
                          className="text-lg leading-7 cursor-pointer text-black dark:text-secondary-400"
                        >
                          الرئيسية
                        </a>
                      </li>
                      <li className="inline-block my-0 mx-1">/</li>

                      <li className="inline-block my-0 mx-1">
                        <span className="text-lg leading-7 text-black">
                          تواصل معنا
                        </span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="md:grid  md:gap-12 py-8 j">
              <div className="col-span-2">
                <div className="max-w-2xl mb-4">
                  <b>ابقَ على تواصل معنا دائما</b>
                  <br />
                  شكرا لاهتمامك. نحن نؤمن بالإبداع باعتباره أحد القوى الرئيسية
                  للتقدم. إذا كانت لديك أي شكاوى أو استفسارات حول منتجاتنا يرجى
                  الاتصال بالرقم الموحد التالي
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <a
                    href="tel:0123456789"
                    className="lg:block text-white bg-primary-500 hover:bg-primary-400 font-acumin-pro px-5 py-2.5 text-center"
                  >
                    0123456789
                  </a>
                </div>
                <div className="font-ge-dinar-medium pt-2">ساعات العمل</div>
                <span className="block py-1">
                  من الساعة 9 صباحا الى 8 مساءا
                </span>
                <div className="font-ge-dinar-medium pt-2">
                  ساعات عمل المبيعات
                </div>
                <span className="block py-1">
                  ساعات العمل للمبيعات
                  <br />
                  من الساعة 9 صباحا الى 8 مساء
                </span>
                <div className="font-ge-dinar-medium pt-2">الموقع</div>
                <a target="_blank" href="#" className="block py-1">
                  الرياض - حي المهدية - شارع السيل الكبير   
                </a>
                <div className="font-ge-dinar-medium pt-2">Follow us</div>
                <p className="block py-1">
                  ابقى دائماً علي التواصل معنا لمعرفة آخر المستجدات والأنشطة
                  الخاصة بنا وآخر الأخبار والأحداث
                </p>
                <div>
                  <div className="flex justify-center" fill="#034452">
                    <div className="flex w-full rtl:space-x-reverse space-x-3 text-black">
                      <a target="_blank" href="#">
                        <img
                          src="https://almajdiah.com/images/twitter.png"
                          className="w-7"
                        />
                      </a>
                      <a target="_blank" href="#">
                        <img
                          src="https://almajdiah.com/images/youtube.png"
                          className="w-7"
                        />
                      </a>
                      <a target="_blank" href="#">
                        <img
                          src="https://almajdiah.com/images/instagram.png"
                          className="w-7"
                        />
                      </a>
                      <a target="_blank" href="#">
                        <img
                          src="https://almajdiah.com/images/linkedin.png"
                          className="w-7"
                        />
                      </a>
                      <a target="_blank" href="#">
                        <img
                          src="https://almajdiah.com/images/snap.png"
                          className="w-7"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConnectUs;
