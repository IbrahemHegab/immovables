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
  const auth = useSelector((state) => state.auth);
  const handleOpenLightbox = (ele, index) => {
    setImagelightBox(ele);
    setPhotoIndex(index);
    setIsOpen(true);
  };
  const images =
    imageLightBox.length > 0
      ? imageLightBox.map((img) => ({
          src: img.image,
          title: "وحدات الموافقه",
          description: "صور وحدات الموافقه",
        }))
      : [
          {
            src: image,
            title: "وحدات الموافقه",
            description: "صور وحدات الموافقه",
          },
        ];

  const handleDelete = (id) => {
    fireSwal("هل أنت متأكد من حذف الوحده ؟", "", async () => {
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
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 grid-cols-2 gap-3">
      {data.length > 0 data ?():"grid"
        
        ))}

      {isOpen && (
        <div>
          {" "}
          <Modal show={isOpen} onClose={() => setIsOpen(false)}>
            <Modal.Header></Modal.Header>
            <Lightbox
              images={images}
              onClose={() => setIsOpen(false)}
              currentIndex={photoIndex}
            />
            <Modal.Footer>
              <Button className="bg-red-600" onClick={() => setIsOpen(false)}>
                اغلاق
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default GalleryVilla_200;
