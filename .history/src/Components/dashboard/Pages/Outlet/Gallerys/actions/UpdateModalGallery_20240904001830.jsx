import { Button, Modal, Label, Dropdown, FileInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenGalleryModelUpdate } from "../../../../../store/SharedStore";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import {
  getGallery,
  updateGallery,
} from "../../../../../store/Gallerys/gallerySlice";

const UpdateModalGallery = () => {
  const { UpdateGalleryModel  } = useSelector((state) => state.sharedStore);
  const [selectedValueStattus, setSelectedValueStatus] = useState("متاح");
console.log(UpdateGalleryModel.data);

  const initstate = {
    area: UpdateGalleryModel.data?.area
        ? UpdateGalleryModel.data.area
        : "",
    price: UpdateGalleryModel.data?.price
        ? UpdateGalleryModel.data.price
        : "",
    rooms: UpdateGalleryModel.data?.rooms
        ,
    hall: UpdateGalleryModel.data?.hall
        ,
    kitchen: UpdateGalleryModel.data?.kitchen
        ,
    bathrooms: UpdateGalleryModel.data?.bathrooms,
    kind: UpdateGalleryModel.data?.kind
        ,

    street: UpdateGalleryModel.data?.street
        ? UpdateGalleryModel.data.street
        : "",
    balcony: UpdateGalleryModel.data?.balcony
        ? UpdateGalleryModel.data.balcony
        : "",
    status: UpdateGalleryModel.data?.status
        ? "true"
        : "false",
    show:
      UpdateGalleryModel.data?.show
        ? "true"
        : "false",
    driver:
 UpdateGalleryModel.data?.driver
        ? "true"
        : "false",

    maid:
      UpdateGalleryModel.data?.maid
        ? "true"
        : "false",
    elevator:
      UpdateGalleryModel.data?.elevator
        ? "true"
        : "false",
    warehouse:
      UpdateGalleryModel.data && UpdateGalleryModel.data.warehouse
        ? "true"
        : "false",
        images: UpdateGalleryModel.data?.images,
  };

  const dispatch = useDispatch();
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
    values.kind =
      UpdateGalleryModel.data && UpdateGalleryModel.data.kind
        ? UpdateGalleryModel.data.kind
        : null;
    values.status =
      selectedValueStattus === "متاح"
        ? "available"
        : selectedValueStattus === "مباع"
        ? "sold"
        : "pawned";
    values.ID = UpdateGalleryModel.data._id;

    dispatch(updateGallery(values))
      .unwrap()
      .then(() => {
        dispatch(getGallery(UpdateGalleryModel.data.kind));
      });
    dispatch(setOpenGalleryModelUpdate(false));
    setSubmitting(false);
  };

  return (
    <Modal show={UpdateGalleryModel.status}>
      <Formik initialValues={initstate} onSubmit={submit}>
        {({ setFieldValue }) => (
          <Form>
            <Modal.Header
              onClick={() => {
                dispatch(setOpenGalleryModelUpdate(false));
              }}
            ></Modal.Header>
            <Modal.Body>
              <div className="grid grid-flow-row-dense lg:grid-cols-4 grid-cols-4 gap-3">
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
                {UpdateGalleryModel.data?.kind === "apartment" ? null : (
                  <>
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
                  </>
                )}
                <div className="col-span-1">
                  <div className="mb-2 block">
                    <Label htmlFor="large" value="الحاله" />
                  </div>
                  <div className="flex justify-center text-center bg-gray-200 p-2 rounded-lg">
                    <Dropdown
                      label={selectedValueStattus}
                      inline
                      onSelect={(e) => setFieldValue("status", e)}
                    >
                      <Dropdown.Item
                        onClick={() => setSelectedValueStatus("متاح")}
                      >
                        متاح
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          setSelectedValueStatus("محجوز");
                        }}
                      >
                        محجوز
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setSelectedValueStatus("مباع")}
                      >
                        مباع
                      </Dropdown.Item>
                    </Dropdown>
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
                      <Label htmlFor="elevatorNo" value="لا" />
                    </div>
                  </div>
                </div>
                <div className="lg:col-auto col-span-3">
                  <div className="mb-2 block">
                    <Label htmlFor="show" value="عرض للعميل" />
                  </div>
                  <div className="grid grid-cols-2">
                    <div>
                      <Field
                        id="showYes"
                        name="show"
                        type="radio"
                        value="true"
                        className="form-radio"
                      />
                      <Label htmlFor="showYes" value="نعم" />
                    </div>
                    <div>
                      <Field
                        id="showNo"
                        name="show"
                        type="radio"
                        value="false"
                        className="form-radio"
                      />
                      <Label htmlFor="showNo" value="لا" />
                    </div>
                  </div>
             
                </div>
                <div className="col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="images" value="الصور" />
                  </div>
                  <FileInput
                    id="images"
                    accept=".png, .jpg, .jpeg"
                    type="file"
                    helperText={`${
                      initstate?.kind === "apartment"
                        ? "تحميل صوره شقه"
                        : "تحميل صور الفيلا"
                    }`}
                    multiple
                    onChange={(e) => setFieldValue("images", e.target.files)}
                  />
                  
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="gap-2">
              <Button type="submit">تعديل</Button>
              <Button
                color="red"
                onClick={() => {
                  dispatch(setOpenGalleryModelUpdate(false));
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

export default UpdateModalGallery;
