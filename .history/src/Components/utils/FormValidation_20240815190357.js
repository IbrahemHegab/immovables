import * as Yup from "yup";
export const galleryFormValid = Yup.object().shape({
    area: Yup.string().required("المساحه مطلوبه"),
    area: Yup.string().required("السعر م"),
    image: Yup.mixed().required("يرجى إدخال صورة"),
    teacher: Yup.string().required("المدرس مطلوب"),
  });