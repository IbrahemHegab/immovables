import { Button, Modal, Label, Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenGalleryModelUpdate } from "../../../../../store/SharedStore";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import {
  getGallery,
  updateGallery,
} from "../../../../../store/Gallerys/gallerySlice";

const UpdateModalGallery = () => {
  const { UpdateGalleryModel } = useSelector((state) => state.sharedStore);

  const initstate = {
    area:
      UpdateGalleryModel.data && UpdateGalleryModel.data.area
        ? UpdateGalleryModel.data.area
        : "",
    price:
      UpdateGalleryModel.data && UpdateGalleryModel.data.price
        ? UpdateGalleryModel.data.price
        : "",
    rooms:
      UpdateGalleryModel.data && UpdateGalleryModel.data.rooms
        ? UpdateGalleryModel.data.rooms
        : "",
    hall:
      UpdateGalleryModel.data && UpdateGalleryModel.data.hall
        ? UpdateGalleryModel.data.hall
        : "",
    kitchen:
      UpdateGalleryModel.data && UpdateGalleryModel.data.kitchen
        ? UpdateGalleryModel.data.kitchen
        : "",
    bathrooms:
      UpdateGalleryModel.data && UpdateGalleryModel.data.bathrooms
        ? UpdateGalleryModel.data.bathrooms
        : "",

    street:
      UpdateGalleryModel.data && UpdateGalleryModel.data.street
        ? UpdateGalleryModel.data.street
        : "",
    balcony:
      UpdateGalleryModel.data && UpdateGalleryModel.data.balcony
        ? UpdateGalleryModel.data.balcony
        : "",

    maid:
      UpdateGalleryModel.data && UpdateGalleryModel.data.maid
        ? UpdateGalleryModel.data.maid
        : false,
    elevator:
      UpdateGalleryModel.data && UpdateGalleryModel.data.elevator
        ? UpdateGalleryModel.data.elevator
        : false,
    warehouse:
      UpdateGalleryModel.data && UpdateGalleryModel.data.warehouse
        ? UpdateGalleryModel.data.warehouse
        : false,
  };

  const dispatch = useDispatch();

  const submit = (values, { setSubmitting }) => {
    values.kind =
      UpdateGalleryModel.data && UpdateGalleryModel.data.kind
        ? UpdateGalleryModel.data.kind
        : null;
    values.status =
      UpdateGalleryModel.data && UpdateGalleryModel.data.status
        ? UpdateGalleryModel.data.status
        : null;
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
                            checked={initstate.maid ?  true : false}
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
                            checked={!initstate.maid ?  true : false}
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
                            checked={initstate.warehouse ?  true : false}
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
                            checked={!initstate.warehouse ?  true : false}
                          />
                          <Label htmlFor="warehouseNo" value="لا" />
                        </div>
                      </div>
                    </div>
                  </>
                )}

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
                        checked={initstate.elevator ?  true : false}
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
                        checked={!initstate.elevator ?  true : false}
                      />
                      <Label htmlFor="elevatorNo" value="لا" />
                    </div>
                  </div>
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
