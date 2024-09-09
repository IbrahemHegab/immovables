import React from "react";
import { Label, Modal, Textarea } from "flowbite-react";
import { useSelector } from "react-redux";
const UpdateNoteTask = () => {
    const { data, status } = useSelector(
        (state) => state.sharedStore.UpdateNoteTaskModel
      );
  return (
    <Modal   show={status} className="max-w-md">
     <Formik initialValues={initstate} onSubmit={submit}>
        {({ setFieldValue }) => (
          <Form>
            <Modal.Header
              onClick={() => {
                dispatch(setOpenEmployeesModelUpdate(false));
              }}
            ></Modal.Header>
            <Modal.Body>
                </Modal.Body>
                </Form>

                
                </Formik>
      </Modal>
 
  );
};

export default UpdateNoteTask;
