import * as Yup from "yup";
export const galleryFormValid = Yup.object().shape({
    area: Yup.string().required("المساحه مطلوبه"),
    price: Yup.string().required("السعر مطلوب"),
    validationSchema={SignupSchema}: Yup.string().required("السعر مطلوب"),
    price: Yup.string().required("السعر مطلوب"),
    price: Yup.string().required("السعر مطلوب"),
    price: Yup.string().required("السعر مطلوب"),
    price: Yup.string().required("السعر مطلوب"),
    image: Yup.mixed().required("يرجى إدخال صورة"),
    teacher: Yup.string().required("المدرس مطلوب"),
  });