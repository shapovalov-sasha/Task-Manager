import React, { useState } from "react";
import "./ControlPanel.css";
import Modal from "../modal/Modal";
import CreateTaskForm from "../forms/CreateTaskForm";

const ControlPanel = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleNewTaskAdd = (task) => {
    props.onNewTaskAdd(task);
    closeModal();
  };

  return (
    <div className="control-panel-container">
      <div>
        <h3 className="view-title">Tasks</h3>
        <p className="subtitle">Your tasks in your space.</p>
      </div>
      <button onClick={openModal} className="button-primary">
        Create Task
      </button>
      <Modal onClose={closeModal} isOpen={isOpen}>
        <h3>Create task</h3>
        <CreateTaskForm addNewTask={handleNewTaskAdd} />
      </Modal>
    </div>
  );
};

export default ControlPanel;
