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

  const submit = (values, { setSubmitting,validationSchema }) => {
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
        {({ setFieldValue ,errors ,touched }) => (
          <Form>
            <Modal.Header
              onClick={() => {
                dispatch(setOpenGalleryModel(false));
              }}
            ></Modal.Header>
            <Modal.Body>
              <div className="grid grid-flow-row-dense lg:grid-cols-4 grid-cols-2 gap-3">
                <div className="lg:col-auto col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="small" value="المساحه" />
                  </div>
                  <Field
                    id="small"
                    name="area"
                    type="text"
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                    placeholder="مساحه الوحده"
                  />
                    <small className="text-red-700">
                    {" "}
                    {errors.area && touched.area ? (
                      <div>{errors.area}</div>
                    ) : null}
                  </small>
                </div>
                <div className="lg:col-auto col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="base" value="السعر" />
                  </div>
                  <Field
                    id="base"
                    name="price"
                    type="text"
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                    placeholder="سعر الوحده"
                  />
                </div>
                <div className="lg:col-auto col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="large" value="عدد دورات المياه" />
                  </div>
                  <Field
                    id="large"
                    name="bathrooms"
                    type="text"
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                    placeholder="عدد دورات المياه"
                  />
                </div>

                <div className="lg:col-auto col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="large" value="عرض الشارع" />
                  </div>
                  <Field
                    id="large"
                    name="street"
                    type="text"
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                    placeholder="عرض الشارع"
                  />
                </div>
                <div className="lg:col-auto col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="small" value="عدد الغرف" />
                  </div>
                  <Field
                    id="small"
                    name="rooms"
                    type="text"
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                    placeholder="عدد الغرف"
                  />
                </div>
                <div className="lg:col-auto col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="small" value="عدد المطابخ" />
                  </div>
                  <Field
                    id="small"
                    name="kitchen"
                    type="text"
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                    placeholder="عدد المطابخ"
                  />
                </div>
                <div className="lg:col-auto col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="small" value="عدد البلكونه" />
                  </div>
                  <Field
                    id="small"
                    name="balcony"
                    type="text"
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                    placeholder="عدد البلكونه"
                  />
                </div>
                <div className="lg:col-auto col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="small" value="عدد الصالات" />
                  </div>
                  <Field
                    id="small"
                    name="hall"
                    type="text"
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                    placeholder="عدد الصالات"
                  />
                </div>

                <div className="lg:col-auto col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="small" value="غرفه خادمه" />
                  </div>
                  <div className="grid grid-cols-2">
                    <div>
                      <Field
                        id="maidYes"
                        name="maid"
                        type="radio"
                        value="true"
                        className="form-radio"
                      />
                      <Label htmlFor="maidYes" value="نعم" />
                    </div>
                    <div>
                      <Field
                        id="maidNo"
                        name="maid"
                        type="radio"
                        value="false"
                        className="form-radio"
                      />
                      <Label htmlFor="maidNo" value="لا" />
                    </div>
                  </div>
                </div>
                <div className="lg:col-auto col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="driver" value="غرفه سائق" />
                  </div>
                  <div className="grid grid-cols-2">
                    <div>
                      <Field
                        id="driverYes"
                        name="driver"
                        type="radio"
                        value="true"
                        className="form-radio"
                      />
                      <Label htmlFor="driverYes" value="نعم" />
                    </div>
                    <div>
                      <Field
                        id="driverNo"
                        name="driver"
                        type="radio"
                        value="false"
                        className="form-radio"
                      />
                      <Label htmlFor="driverNo" value="لا" />
                    </div>
                  </div>
                </div>
                <div className="lg:col-auto col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="elevator" value="مصعد" />
                  </div>
                  <div className="grid grid-cols-2">
                    <div>
                      <Field
                        id="elevatorYes"
                        name="elevator"
                        type="radio"
                        value="true"
                        className="form-radio"
                      />
                      <Label htmlFor="elevatorYes" value="نعم" />
                    </div>
                    <div>
                      <Field
                        id="elevatorNo"
                        name="elevator"
                        type="radio"
                        value="false"
                        className="form-radio"
                      />
                      <Label htmlFor="elevatorrNo" value="لا" />
                    </div>
                  </div>
                </div>

                <div className="lg:col-auto col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="warehouse" value="مستودع" />
                  </div>
                  <div className="grid grid-cols-2">
                    <div>
                      <Field
                        id="warehouseYes"
                        name="warehouse"
                        type="radio"
                        value="true"
                        className="form-radio"
                      />
                      <Label htmlFor="warehouseYes" value="نعم" />
                    </div>
                    <div>
                      <Field
                        id="warehouseNo"
                        name="warehouse"
                        type="radio"
                        value="false"
                        className="form-radio"
                      />
                      <Label htmlFor="warehouseNo" value="لا" />
                    </div>
                  </div>
                </div>

                <div className="col-span-4">
                  <div className="mb-2 block">
                    <Label htmlFor="images" value="الصور" />
                  </div>
                  <FileInput
                    id="images"
                    helperText="تحميل صور الفيلا"
                    multiple
                    onChange={(e) => setFieldValue("images", e.target.files)}
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="gap-2">
              <Button type="submit">اضافه</Button>
              <Button
                color="gray"
                onClick={() => {
                  dispatch(setOpenGalleryModel(false));
                }}
              >
                اغلاق
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateModalGallery;
