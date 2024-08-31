import { Button, Modal, Label, FileInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenEmployeesModel,
  setOpenTaskModel,
} from "../../../../../store/SharedStore";
import { Field, Form, Formik } from "formik";
import { createEmployees } from "../../../../../store/Employees/employeesSlice";

const CreateTaskModel = () => {
  const initstate = {
    taskName: "",
    jobTitle: "",
  };

  const { TaskModel } = useSelector((state) => state.sharedStore);
  const dispatch = useDispatch();

  const submit = (values) => {
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
              <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-2 gap-3">
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

                <div className="col-span-3">
                  <div className="mb-2 block">
                    <Label htmlFor="images" value="الصور" />
                  </div>
                  <FileInput
                    id="images"
                    accept=".png, .jpg, .jpeg"
                    type="file"
                    helperText={"صوره المهمه ان وجدت"}
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
              <Button type="submit">اضافه مهمه</Button>
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
