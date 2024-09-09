import React from "react";
import { Label, Modal, Textarea } from "flowbite-react";
import { useSelector } from "react-redux";
import { Form, Formik } from "formik";
import { setOpenNoteTaskModelUpdate } from "../../../../../store/SharedStore";
const UpdateNoteTask = () => {
  const { data, status } = useSelector(
    (state) => state.sharedStore.UpdateNoteTaskModel
  );
  return (
    <Modal show={status} className="max-w-md">
      <Formik initialValues={initstate} onSubmit={submit}>
        {({ setFieldValue }) => (
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
