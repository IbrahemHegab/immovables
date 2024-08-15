import * as Yup from "yup";
export const classFormValid = Yup.object().shape({
    name: Yup.string().required("  الاسم مطلوب"),
    image: Yup.mixed().required("يرجى إدخال صورة"),
    teacher: Yup.string().required("المدرس مطلوب"),
  });