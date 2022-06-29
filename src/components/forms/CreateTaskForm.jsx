import React, { useState } from "react";
import "./CreateTaskForm.css";

const CreateTaskForm = () => {
  const [formData, setFormData] = useState({
    taskName: "",
    dueDate: "",
    taskDetails: "",
  });

  const handleNameChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      taskName: event.target.value,
    }));
  };

  const handleDateChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      dueDate: event.target.value,
    }));
  };

  const handleDetailsChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      taskDetails: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("formData", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="label-md">Task Name</label>
          <input
            name="taskName"
            onChange={handleNameChange}
            className="input-primary"
            type="text"
          />
        </div>

        <div className="form-row">
          <label className="label-md">Due Date</label>
          <input
            name="dueDate"
            onChange={handleDateChange}
            className="input-primary"
            type="date"
          />
        </div>

        <div className="form-row">
          <label className="label-md">Task Details</label>
          <textarea
            name="taskDetails"
            onChange={handleDetailsChange}
            className="input-primary"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button className="button-primary" type="submit">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
