import { Button, Modal, Label, FileInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenTaskModel } from "../../../../../store/SharedStore";
import { Field, Form, Formik } from "formik";
import { createTask } from "../../../../../store/Task/taskSlice";
import { TaskFormValid } from "../../../../../utils/FormValidation";

const CreateTaskModel = () => {
  const initstate = {
    taskName: "",
    taskDuration: "",
    taskNotes: "",
    assignedTo: "",
    assignedBy: "",
    token: "",
  };
  const auth = useSelector((state) => state.auth);
  const sharedStore = useSelector((state) => state.sharedStore);

  const dispatch = useDispatch();

  const submit = (values) => {
    values.assignedBy = auth.user._id;
    values.token = auth.token;
    values.assignedTo = sharedStore?.TaskModel.data?._id;
    dispatch(createTask(values));
    dispatch(setOpenTaskModel({ status: false }));
  };

  return (
    <Modal show={sharedStore.TaskModel.status}>
      <Formik
        initialValues={initstate}
        onSubmit={submit}
        validationSchema={TaskFormValid}
        validateOnBlur={true}
        validateOnChange={true}
      >
        {({setFieldValue, errors, touched }) => (
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
                    name="taskName"
                    type="text"
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                    placeholder="اسم المهمه"
                  />
                  {errors.taskName && touched.taskName ? (
                    <div className="text-red-500 text-sm">
                      {errors.taskName}
                    </div>
                  ) : null}
                </div>
                <div className="lg:col-auto col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="base" value="مده المهمه" />
                  </div>
                  <Field
                    id="base"
                    name="taskDuration"
                    type="text"
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                    placeholder="مده المهمه"
                  />
                  {errors.taskDuration && touched.taskDuration ? (
                    <div className="text-red-500 text-sm">
                      {errors.taskDuration}
                    </div>
                  ) : null}
                </div>
                <div className="lg:col-auto col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="large" value="ملحوظه" />
                  </div>
                  <Field
                    id="large"
                    name="taskNotes"
                    type="text"
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                    placeholder="ملحوظه"
                  />
                </div>
                <div className="col-span-4">
                  <div className="mb-2 block">
                    <Label htmlFor="images" value="الصور" />
                  </div>
                  <FileInput
                    id="images"
                    accept=".png, .jpg, .jpeg"
                    type="file"
                    helperText={"اضافه صور المهمه"}
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
