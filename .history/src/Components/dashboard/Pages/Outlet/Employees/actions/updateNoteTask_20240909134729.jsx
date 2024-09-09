import React from "react";
import { Label, Textarea } from "flowbite-react";
const UpdateNoteTask = () => {
  return (
    <M className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea
        id="comment"
        placeholder="Leave a comment..."
        required
        rows={4}
      />
    </M>
  );
};

export default UpdateNoteTask;
