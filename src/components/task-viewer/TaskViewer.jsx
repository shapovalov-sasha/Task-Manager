import React from "react";
import TaskCard from "../task-card/TaskCard";
import ControlPanel from "../control-panel/ControlPanel";
import "./TaskViewer.css";

const TaskViewer = (props) => {
  return (
    <div className="task-viewer-container">
      <ControlPanel onNewTaskAdd={props.onNewTaskAdd} />
      <div className="task-list-container">
        <div className="task-list-grid">
          {props.taskList.map((item) => (
            <TaskCard
              key={item.id}
              id={item.id}
              status={item.status}
              name={item.name}
              dueDate={item.dueDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskViewer;
