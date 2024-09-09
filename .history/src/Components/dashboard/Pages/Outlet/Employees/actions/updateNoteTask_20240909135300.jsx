import React from "react";
import { Label, Modal, Textarea } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import { setOpenNoteTaskModelUpdate, setOpenToast } from "../../../../../store/SharedStore";
import { getEmployees } from "../../../../../store/Employees/employeesSlice";
import { updateTask } from "../../../../../store/Task/taskSlice";
const UpdateNoteTask = () => {
    const dispatch = useDispatch()
  const { data, status } = useSelector(
    (state) => state.sharedStore.UpdateNoteTaskModel
  );
  const initstate = {
    taskNotes: data && data.taskNotes ? data.name : "",
    role: data && data.role ? data.role : "",
    identity: data && data.identity ? data.identity : "",
    phone: data && data.phone ? data.phone : "",
    id: data && data._id ? data._id : null,
  };
  const submit = (values) => {
   
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
    <Modal show={status} className="max-w-md">
      <Formik initialValues={initstate} onSubmit={submit}>
        {() => (
          <Form>
            <Modal.Header
              onClick={() => {
                dispatch(setOpenNoteTaskModelUpdate(false));
              }}
            ></Modal.Header>
            <Modal.Body> <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
    </div></Modal.Body>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default UpdateNoteTask;
