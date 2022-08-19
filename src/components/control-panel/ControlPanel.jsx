import React from "react";
import Modal from "../modal/Modal";
import CreateTaskForm from "../forms/CreateTaskForm";
import "./ControlPanel.css";

const ControlPanel = (props) => {
  const { isOpen, setIsOpen, onNewTaskAdd, taskList } = props;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleNewTaskAdd = (task) => {
    onNewTaskAdd(task);
    closeModal();
  };

  return (
    <div className="control-panel-container">
      <div>
        <h3 className="view-title">Tasks</h3>
        <p className="subtitle">Your tasks in your space.</p>
      </div>
      {taskList.length > 0 && (
        <button onClick={openModal} className="button-primary btn-md">
          Create Task
        </button>
      )}
      <Modal onClose={closeModal} isOpen={isOpen}>
        <h3>Create task</h3>
        <CreateTaskForm addNewTask={handleNewTaskAdd} />
      </Modal>
    </div>
  );
};

export default ControlPanel;
