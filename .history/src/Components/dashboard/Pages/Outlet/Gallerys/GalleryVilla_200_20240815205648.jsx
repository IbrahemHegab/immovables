"use client";
import { Button, Card, Modal } from "flowbite-react";
import image from "../../../../../assets/available/image5.jpg";
import { setOpenGalleryModelUpdate } from "../../../../store/SharedStore";
import { useDispatch, useSelector } from "react-redux";
import { fireSwal } from "../../../../utils/AlertModel";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// استيراد مكتبة react-lightbox-component
import Lightbox from "react-lightbox-component";
import "react-lightbox-component/build/css/index.css";
import {
  deleteGallery,
  getGallery,
} from "../../../../store/Gallerys/gallerySlice";

const GalleryVilla_200 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [imageLightBox, setImagelightBox] = useState([]);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.gallery);

  const handleOpenLightbox = (ele, index) => {
    setImagelightBox(ele);
    setPhotoIndex(index);
    setIsOpen(true);
  };
  const images =
    imageLightBox.length > 0
      ? imageLightBox.map((img) => ({
          src: img.image,
        }))
      : [
          {
            src: image,
          },
        ];

  const handleDelete = (id) => {
    fireSwal("هل أنت متأكد من حذف العميل؟", "", async () => {
      await dispatch(deleteGallery(id));
      dispatch(getGallery("villa-200-295"));
    });
  };

  const handleUpdate = (id) => {
    dispatch(setOpenGalleryModelUpdate({ data: id, status: true }));
  };

  useEffect(() => {
    dispatch(getGallery("villa-200-295"));
  }, [dispatch]);

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-3">
      {data.length > 0 &&
        data.map((e, index) => (
          <Card className="max-w-sm card-gallery bg-bla" key={e?._id}>
            <div className="h-44 sm:h-64 xl:h-48 2xl:h-96">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {e?.images.length > 0 &&
                  e.images.map((img, idx) => (
                    <SwiperSlide
                      key={idx}
                      onClick={() =>
                        handleOpenLightbox(
                          e.images,
                          index * img.image.length + idx
                        )
                      }
                    >
                      <img src={img.image} alt={`Image ${idx + 1}`} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>

            <div className="grid grid-cols-3 content-around text-gray-900 text-center xl:mt-20 mt-20 md:mt-0">
              <div>
                <h6>المساحه</h6>
                <small className="py2">{e?.area}</small>
              </div>
              <div>
                <h6>السعر</h6>
                <small className="py2">{e?.price}</small>
              </div>
              <div>
                <h6>عدد الغرف</h6>
                <small className="py2">{e?.rooms}</small>
              </div>
              <div>
                <h6>عدد الصالات</h6>
                <small className="py2">{e?.hall}</small>
              </div>
              <div>
                <h6>دورات المياه</h6>
                <small className="py2">{e?.bathrooms}</small>
              </div>
              <div>
                <h6>عرض الشارع</h6>
                <small className="py2">{e?.street}</small>
              </div>
              <div>
                <h6>غرفه خادمه</h6>
                <small className="py2">{e?.maid ? "نعم" : "لا"}</small>
              </div>
              <div>
                <h6>مصعد</h6>
                <small className="py2">{e?.elevator ? "نعم" : "لا"}</small>
              </div>
              <div>
                <h6>المطابخ</h6>
                <small className="py2">{e?.kitchen}</small>
              </div>
              <div>
                <h6>المستودع</h6>
                <small className="py2">{e?.warehouse ? "نعم" : "لا"}</small>
              </div>
              <div>
                <h6>البلكونه</h6>
                <small>{e?.balcony}</small>
              </div>
            </div>

            <div className="flex items-center justify-between p-5">
              <a
                onClick={() => handleDelete(e._id)}
                href="#"
                className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                حذف
              </a>

              <a
                onClick={() => handleUpdate(e)}
                href="#"
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                تعديل
              </a>
            </div>
          </Card>
        ))}

      {isOpen && (
        <div>
          {" "}
          <Button onClick={() => setIsOpen(true)}>Toggle modal</Button>
          <Modal show={isOpen} onClose={() => setIsOpen(false)}>
            <Modal.Header>اغلاق</Modal.Header>
            <Lightbox
              images={images}
              onClose={() => setIsOpen(false)}
              currentIndex={photoIndex}
            />
            <Modal.Footer>
              <Button className="bg-">اغلاق</Button>
           
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default GalleryVilla_200;
