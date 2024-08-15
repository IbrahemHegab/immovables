import * as Yup from "yup";
export const galleryFormValid = Yup.object().shape({
    area: Yup.string().required("  h مطلوب"),
    image: Yup.mixed().required("يرجى إدخال صورة"),
    teacher: Yup.string().required("المدرس مطلوب"),
  });