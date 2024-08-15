import * as Yup from "yup";
export const galleryFormValid = Yup.object().shape({
    name: Yup.string().required("  الاسم مطلوب"),
    image: Yup.mixed().required("يرجى إدخال صورة"),
    teacher: Yup.string().required("المدرس مطلوب"),
  });