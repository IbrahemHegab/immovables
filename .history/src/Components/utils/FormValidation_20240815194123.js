import * as Yup from "yup";
export const galleryFormValid = Yup.object().shape({
      area: Yup.string().required("المساحة مطلوبة"),
      price: Yup.string().required("السعر مطلوب"),
      rooms: Yup.string().required("عدد الغرف مطلوب"),
      hall: Yup.string().required("عدد الصالات مطلوب"),
      kitchen: Yup.string().required("عدد المطابخ مطلوب"),
      bathrooms: Yup.string().required("عدد دورات المياه مطلوب"),
      street: Yup.string().required("عرض الشارع مطلوب"),
      balcony: Yup.string().required("عدد البلكونات مطلوب"),
      maid: Yup.boolean(),
      elevator: Yup.boolean(),
      warehouse: Yup.boolean(),
      driver: Yup.boolean(),
      image: Yup.mixed()
      .required("يرجى إدخال صورة")
      .test("fileType", "يرجى رفع صورة فقط", (value) => {
        return (
          value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)
        );
      }),
    });
