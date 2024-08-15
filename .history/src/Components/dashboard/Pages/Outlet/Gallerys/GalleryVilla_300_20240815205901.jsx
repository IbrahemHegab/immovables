// "use client";
// import { Card } from "flowbite-react";
// import image from "../../../../../assets/available/image5.jpg";
// import { setOpenGalleryModelUpdate } from "../../../../store/SharedStore";
// import { useDispatch, useSelector } from "react-redux";
// import { fireSwal } from "../../../../utils/AlertModel";
// import { useEffect } from "react";
// import {
//   deleteGallery,
//   getGallery,
// } from "../../../../store/Gallerys/gallerySlice";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Navigation } from "swiper/modules";
// const GalleryVilla_300 = () => {
//   const dispatch = useDispatch();
//   const { data } = useSelector((state) => state.gallery);
//   // const [switch1, setSwitch1] = useState(false);

//   const handleDelete = (id) => {
//     fireSwal("هل أنت متأكد من حذف الوحده", "", async () => {
//       await dispatch(deleteGallery(id));
//       dispatch(getGallery("villa-300-450")); // إعادة جلب البيانات بعد الحذف
//     });
//   };
//   const handleUpdate = (id) => {
//     dispatch(setOpenGalleryModelUpdate({ data: id, status: true }));
//   };
//   useEffect(() => {
//     dispatch(getGallery("villa-300-450"));
//   }, [dispatch]);
  
//   return (
//     <div className="grid lg:grid-cols-3  sm:grid-cols-1 gap-3 ">
//       {data.length > 0 && data
//         ? data.map((e) => (
//             <Card className="max-w-sm card-gallery bg-bla" key={e?._id}>
//               <div className="h-44 sm:h-64 xl:h-48 2xl:h-96">
//                 <Swiper
//                   slidesPerView={1}
//                   spaceBetween={30}
//                   loop={true}
//                   navigation={true}
//                   modules={[Navigation]}
//                   className="mySwiper"
//                 >
//                   {e?.images.length > 0 && e.images ? (
//                     e.images.map((img) => (
//                       <SwiperSlide key={e._id}>
//                         <img src={img.image} />
//                       </SwiperSlide>
//                     ))
//                   ) : (
//                     <SwiperSlide>
//                       <img src={image} />
//                     </SwiperSlide>
//                   )}
//                 </Swiper>
//               </div>
//               <div className="grid grid-cols-3 content-around text-gray-900 text-center xl:mt-20 mt-20 md:mt-0">
//                 <div>
//                   <h6>المساحه</h6>
//                   <small className="py2">{e?.area}</small>
//                 </div>
//                 <div>
//                   <h6>السعر</h6>
//                   <small className="py2">{e?.price}</small>
//                 </div>

//                 <div>
//                   <h6>عدد الغرف</h6>
//                   <small className="py2">{e?.rooms}</small>
//                 </div>
//                 <div>
//                   <h6>عدد الصالات</h6>
//                   <small className="py2">{e?.hall}</small>
//                 </div>
//                 <div>
//                   <h6>دورات المياه</h6>
//                   <small className="py2">{e?.bathrooms}</small>
//                 </div>
//                 <div>
//                   <h6>عرض الشارع</h6>
//                   <small className="py2">{e?.street}</small>
//                 </div>
//                 <div>
//                   <h6>غرفه خادمه</h6>
//                   <small className="py2">{e?.maid ? "نعم" : "لا"}</small>
//                 </div>
//                 <div>
//                   <h6>مصعد</h6>
//                   <small className="py2">{e?.elevator ? "نعم" : "لا"}</small>
//                 </div>
//                 <div>
//                   <h6>المطابخ</h6>
//                   <small className="py2">{e?.kitchen}</small>
//                 </div>
//                 <div>
//                   <h6>المستودع</h6>
//                   <small className="py2">{e?.warehouse ? "نعم" : "لا"}</small>
//                 </div>

//                 <div>
//                   <h6>البلكونه</h6>
//                   <small>{e?.balcony}</small>
//                 </div>
//                 {/* <div>
//                   <h6 className="text-gray-950 ">عرض الوحده</h6>
//                   <ToggleSwitch
//                     className="m-auto py-2"
//                     checked={switch1}
//                     sizing={"sm"}
//                     onChange={setSwitch1}
//                   />
//                 </div> */}
//               </div>

//               <div className="flex items-center justify-between p-5">
//                 <a
//                   onClick={() => handleDelete(e._id)}
//                   href="#"
//                   className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
//                 >
//                   حذف
//                 </a>

//                 <a
//                   onClick={() => handleUpdate(e)}
//                   href="#"
//                   className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
//                 >
//                   تعديل
//                 </a>
//               </div>
//             </Card>
//           ))
//         : null}
//     </div>
//   );
// };

// export default GalleryVilla_300;
