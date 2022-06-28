import React from "react";
import "./CreateTaskForm.css";

const CreateTaskForm = () => {
  return (
    <div>
      <form>
        <div className="form-row">
          <label className="label-md">Task Name</label>
          <input className="input-primary" type="text" />
        </div>

        <div className="form-row">
          <label className="label-md">Due Date</label>
          <input className="input-primary" type="date" />
        </div>

        <div className="form-row">
          <label className="label-md">Task Details</label>
          <textarea className="input-primary" cols="30" rows="10"></textarea>
        </div>

        <button className="button-primary" type="submit">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
