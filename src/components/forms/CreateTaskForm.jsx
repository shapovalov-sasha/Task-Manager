import React, { useState } from "react";
import "./CreateTaskForm.css";

const CreateTaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState();
  const [taskDetails, setTaskDetails] = useState("");

  /* 
  // State -> obiect, toate datele sunt salvate intr-un singur state.
  const [formData, setFormData] = useState({
    taskName: "",
    dueDate: "",
    taskDetails: "",
  });
 */

  /* 
  // Functia care schimba state-ul de tip obiect pe baza numelui field-ului care a apelat-o
  const handleInputChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  */

  const handleNameChange = (event) => {
    /*   
    setFormData((prevState) => ({
      ...prevState,
      taskName: event.target.value,
    }));
 */
    setTaskName(event.target.value);
  };

  const handleDateChange = (event) => {
    /*  
    setFormData((prevState) => ({
      ...prevState,
      dueDate: event.target.value,
    })); 
    */
    setDueDate(event.target.value);
  };

  const handleDetailsChange = (event) => {
    /*   
    setFormData((prevState) => ({
      ...prevState,
      taskDetails: event.target.value,
    }));
     */
    setTaskDetails(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    /*
    // decomentati daca utilizati state-ul de tip obiect,
    // nu uitati sa comentati codul de la state-ul idividual in acest caz
         console.log("formData", formData);
    */
    const newTask = {
      name: taskName,
      dueDate: dueDate,
      taskDetails: taskDetails,
      status: "To do",
    };

    console.log("newTask = ", newTask);
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
