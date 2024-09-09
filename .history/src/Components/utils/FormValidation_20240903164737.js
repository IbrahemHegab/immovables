import * as Yup from "yup";
export const galleryFormValid = Yup.object().shape({
  area: Yup.string().required("المساحة مطلوبة"),

  price: Yup.string().required("السعر مطلوب"),
  rooms: Yup.string().required("عدد الغرف مطلوب"),
  hall: Yup.string().required("عدد الصالات مطلوب"),
  kitchen: Yup.string().required("عدد المطابخ مطلوب"),
  bathrooms: Yup.string().required(" دورات المياه مطلوبه"),
  // street: Yup.string().required("عرض الشارع مطلوب"),
  balcony: Yup.string().required("عدد البلكونات مطلوب"),
  maid: Yup.boolean(),
  elevator: Yup.boolean(),
  warehouse: Yup.boolean(),
  driver: Yup.boolean(),
  images: Yup.mixed()
    .required("يرجى إدخال صورة")
    .test("fileType", "يرجى رفع صورة احده علي الاقل", (value) => {
      if (!value || value.length === 0) return false; // في حالة عدم وجود صور
      for (let i = 0; i < value.length; i++) {
        if (!["image/jpeg", "image/png", "image/gif"].includes(value[i].type)) {
          return false; // في حالة العثور على ملف غير صورة
        }
      }
      return true; // إذا كانت جميع الملفات صور صحيحة
    }),
});
export const TaskFormValid = Yup.object().shape({
  taskName: Yup.string().required("اسم المهمه مطلوبه"),
  taskDuration: Yup.string().required("مده المهمه مطلوبه"),
});
