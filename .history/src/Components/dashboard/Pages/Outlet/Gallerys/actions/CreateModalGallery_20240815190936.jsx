import { Button, Modal, Label, FileInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenGalleryModel } from "../../../../../store/SharedStore";
import { Formik, Form, Field } from "formik";
import {
  createGallery,
  getGallery,
} from "../../../../../store/Gallerys/gallerySlice";
import { galleryFormValid } from "../../../../../utils/FormValidation";

const CreateModalGallery = () => {
  const initstate = {
    area: "",
    price: "",
    rooms: "",
    hall: "",
    kitchen: "",
    bathrooms: "",
    street: "",
    balcony: "",
    maid: Boolean,
    elevator: Boolean,
    warehouse: Boolean,
    driver: Boolean,

    images: [],
  };

  const dispatch = useDispatch();
  const { GalleryModel } = useSelector((state) => state.sharedStore);

  const submit = (values, { setSubmitting }) => {
    const data = new FormData();
    for (const key in values) {
      if (key !== "images") {
        data.append(key, values[key]);
      }
    }
    for (let index = 0; index < values.images.length; index++) {
      data.append("images", values.images[index]);
    }

    data.append("kind", GalleryModel.data.kind);
    dispatch(createGallery(data))
      .unwrap()
      .then(() => {
        dispatch(getGallery(GalleryModel.data.kind));
      });
    dispatch(setOpenGalleryModel(false));
    setSubmitting(false);
  };

  return (
    <Modal show={GalleryModel.status}>
      <Formik initialValues={initstate} onSubmit={submit} validationSchema={galleryFormValid} >
        {({ setFieldValue }) => (
          {({ errors, touched }) => ()}
          
        )}
      </Formik>
    </Modal>
  );
};

export default CreateModalGallery;
