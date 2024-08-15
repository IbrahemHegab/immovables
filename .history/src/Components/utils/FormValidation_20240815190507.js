import * as Yup from "yup";
export const galleryFormValid = Yup.object().shape({
    area: Yup.string().required("المساحه مطلوبه"),
    price: Yup.string().required("السعر مطلوب"),
    rooms: Yup.string().required("السعر مطلوب"),
    street: Yup.string().required("السعر مطلوب"),
    hall: Yup.string().required("السعر مطلوب"),
    kitchen: Yup.string().required("السعر مطلوب"),
    bathrooms: Yup.string().required("السعر مطلوب"),
    balcony: Yup.string().required("السعر مطلوب"),
    maid: Yup.string().required("السعر مطلوب"),
    elevator: Yup.string().required("السعر مطلوب"),
    driver: Yup.string().required("السعر مطلوب"),
    bathrooms: Yup.string().required("السعر مطلوب"),
    image: Yup.mixed().required("يرجى إدخال صورة"),
    teacher: Yup.string().required("المدرس مطلوب"),
  });