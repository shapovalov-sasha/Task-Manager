import React from "react";
import "./TaskViewer.css";
import TaskCard from "../task-card/TaskCard";

function TaskViewer(props) {
  return (
    <div className="task-viewer-container">
      <div className="control-panel-container">
        <div>
          <h3 className="view-title">Tasks</h3>
          <p className="subtitle">Your tasks in your space.</p>
        </div>
        <button onClick={props.onCreateClick} className="button-primary">
          Create Task
        </button>
      </div>

      <div className="task-list-container">
        {props.taskList.map((item, index) => (
          <TaskCard
            key={index}
            id={item.id}
            status={item.status}
            name={item.name}
            dueDate={item.dueDate}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskViewer;
