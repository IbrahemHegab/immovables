import React from "react";
import { Label, Modal, Textarea } from "flowbite-react";
import { useSelector } from "react-redux";
const UpdateNoteTask = () => {
    const { data, status } = useSelector(
        (state) => state.sharedStore.UpdateEmployeesModel
      );
  return (
    <Modal   show={status} className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea
        id="comment"
        placeholder="Leave a comment..."
        required
        rows={4}
      />
    </Modal>
  );
};

export default UpdateNoteTask;
