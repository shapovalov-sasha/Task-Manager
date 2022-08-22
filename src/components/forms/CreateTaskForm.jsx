import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { validateForm } from "./helper/formValidator";
import "./CreateTaskForm.css";

const CreateTaskForm = (props) => {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [formValidation, setFormValidation] = useState({
    taskName: "",
    dueDate: "",
    taskDetails: "",
    isValid: true,
  });

  useEffect(() => {
    setFormValidation(validateForm(taskName, dueDate, taskDetails));
  }, [taskName, dueDate, taskDetails]);

  const handleNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setTaskDetails(event.target.value);
  };

  const resetForm = () => {
    setTaskName("");
    setDueDate("");
    setTaskDetails("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      name: taskName,
      dueDate: dueDate,
      taskDetails: taskDetails,
      status: "Todo",
    };

    props.addNewTask(newTask);
    resetForm();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="label-md">Task Name</label>
          <input
            value={taskName}
            name="taskName"
            onChange={handleNameChange}
            className={clsx(
              "input-primary",
              formValidation.taskName && "error"
            )}
            type="text"
          />
          <p className="error-message">{formValidation.taskName}</p>
        </div>

        <div className="form-row">
          <label className="label-md">Due Date</label>
          <input
            value={dueDate}
            name="dueDate"
            onChange={handleDateChange}
            className={clsx("input-primary", formValidation.dueDate && "error")}
            type="date"
          />
          <p className="error-message">{formValidation.dueDate}</p>
        </div>

        <div className="form-row">
          <label className="label-md">Task Details</label>
          <textarea
            value={taskDetails}
            name="taskDetails"
            onChange={handleDetailsChange}
            className={clsx(
              "input-primary",
              formValidation.taskDetails && "error"
            )}
            cols="30"
            rows="10"
          ></textarea>
          <p className="error-message">{formValidation.taskDetails}</p>
        </div>

        <button
          disabled={!formValidation.isValid}
          className="button-primary"
          type="submit"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
