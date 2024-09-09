import React from "react";
import { Button, Label, Modal, Textarea } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import {
  setOpenNoteTaskModelUpdate,
  setOpenToast,
} from "../../../../../store/SharedStore";
import { getEmployees } from "../../../../../store/Employees/employeesSlice";
import { updateTask } from "../../../../../store/Task/taskSlice";
const UpdateNoteTask = () => {
  const dispatch = useDispatch();
  const { data, status, dataType } = useSelector(
    (state) => state.sharedStore.UpdateNoteTaskModel
  );
  const initstate = {
    taskNotes: data && data.taskNotes ? data.taskNotes : "",
    id: data && data._id ? data._id : null,
  };

  console.log(dataType);

  const submit = (values) => {
    values.status = dataType;
    dispatch(updateTask(values))
      .then(() => {
        dispatch(setOpenToast({ msg: "تم تعديل مهمة جديدة", status: true }));
        setTimeout(() => {
          dispatch(setOpenToast({ msg: null, status: false }));
        }, 3000);
        dispatch(getEmployees());
        dispatch(setOpenNoteTaskModelUpdate(false));
      })
      .catch((error) => {
        console.error("Error updating employees:", error);
      });
  };
  return (
    <Modal show={status} className="max-w">
      <Formik initialValues={initstate} onSubmit={submit}>
        {() => (
          <Form>
            <Modal.Header
              onClick={() => {
                dispatch(setOpenNoteTaskModelUpdate(false));
              }}
            ></Modal.Header>
            <Modal.Body>
              {" "}
              <div className="max-w">
                <div className="mb-2 block">
                  <Label
                    htmlFor="comment"
                    value="الملاحظات علي المهمة"
                    className="text-lg font-semibold text-gray-700"
                  />
                </div>
                <Textarea
                  name="taskNotes"
                  id="comment"
                  defaultValue={initstate.taskNotes}
                  placeholder="أدخل الملاحظات على المهمة"
                  required
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
              </div>
            </Modal.Body>
            <Modal.Footer className="gap-2">
              <Button type="submit">ارسال</Button>
              <Button
                color="gray"
                onClick={() => {
                  dispatch(setOpenNoteTaskModelUpdate(false));
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

export default UpdateNoteTask;
