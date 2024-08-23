import { Button, Modal, Label, Dropdown, FileInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenEmployeesModel, setOpenTaskModel } from "../../../../../store/SharedStore";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { createEmployees } from "../../../../../store/Employees/employeesSlice";

const CreateTaskModel = () => {
  const initstate = {
    name: "",
    jobTitle: "",
  };
  const [selectedValueKind, setSelectedValueKind] = useState("مشرف");

  const { TaskModel } = useSelector((state) => state.sharedStore);
  const dispatch = useDispatch();

  const submit = (values) => {
    values.jobTitle = selectedValueKind;
    dispatch(createEmployees(values));
    dispatch(setOpenEmployeesModel(false));
  };

  return (
    <Modal show={TaskModel.status}>
      <Formik
        initialValues={initstate}
        onSubmit={submit}
     
        validateOnBlur={true}
        validateOnChange={true}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form>
            <Modal.Header
              onClick={() => {
                dispatch(setOpenTaskModel(false));
              }}
            ></Modal.Header>
            <Modal.Body>
              <div className="grid grid-flow-row-dense lg:grid-cols-4 grid-cols-2 gap-3">
                <div className="lg:col-auto col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="small" value="اسم المهمه" />
                  </div>
                  <Field
                    id="small"
                    name="area"
                    type="text"
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                    placeholder="اسم المهمه"
                  />
                  {errors.area && touched.area ? (
                    <div className="text-red-500 text-sm">{errors.area}</div>
                  ) : null}
                </div>
                <div className="lg:col-auto col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="base" value="مده المهمه" />
                  </div>
                  <Field
                    id="base"
                    name="price"
                    type="text"
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                    placeholder="مده المهمه"
                  />
                  {errors.price && touched.price ? (
                    <div className="text-red-500 text-sm">{errors.price}</div>
                  ) : null}
                </div>
                <div className="lg:col-auto col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="large" value="ملحوظه" />
                  </div>
                  <Field
                    id="large"
                    name="bathrooms"
                    type="text"
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                    placeholder="ملحوظه"
                  />
                  {errors.bathrooms && touched.bathrooms ? (
                    <div className="text-red-500 text-sm">
                      {errors.bathrooms}
                    </div>
                  ) : null}
                </div>

           
              
           
             
               
                  <> 
                    
             
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

                

                <div className="col-span-4">
                  <div className="mb-2 block">
                    <Label htmlFor="images" value="الصور" />
                  </div>
                  <FileInput
                    id="images"
                    accept=".png, .jpg, .jpeg"
                    type="file"
                    helperText={` "تحميل صوره شقه" :"تحميل صور الفيلا"}`}
                    multiple
                    onChange={(e) => setFieldValue("images", e.target.files)}
                  />
                  {errors.images && touched.images ? (
                    <div className="text-red-500 text-sm">{errors.images}</div>
                  ) : null}
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="gap-2">
              <Button type="submit">اضافه</Button>
              <Button
                color="gray"
                onClick={() => {
                  dispatch(setOpenTaskModel(false));
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

export default CreateTaskModel;
