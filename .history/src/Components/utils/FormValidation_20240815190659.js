import * as Yup from "yup";
export const galleryFormValid = Yup.object().shape({
    area: Yup.string().required("المساحه مطلوبه"),
    price: Yup.string().required("السعر مطلوب"),
    rooms: Yup.string().required("عدد الغرف مطلوبه"),
    street: Yup.string().required("عرض الشارع مطلوب"),
    hall: Yup.string().required("عدد الاصالات مطلوبه"),
    kitchen: Yup.string().required("عدد المطابخ مطلوبه"),
    bathrooms: Yup.string().required("عدد دورات المياه مطلوبه"),
    balcony: Yup.string().required("عدد البلكونات مطلوبه"),
    maid: Yup.string().required("الاختيار "),
    elevator: Yup.string().required("السعر مطلوب"),
    driver: Yup.string().required("السعر مطلوب"),
    warehouse: Yup.string().required("السعر مطلوب"),
    kind: Yup.string().required("السعر مطلوب"),
    images: Yup.mixed().required("يرجى إدخال صورة"),
  
  });