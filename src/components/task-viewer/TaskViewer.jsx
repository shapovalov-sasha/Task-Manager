import React from "react";
import TaskCard from "../task-card/TaskCard";
import ControlPanel from "../control-panel/ControlPanel";
import "./TaskViewer.css";

function TaskViewer(props) {
  const todoItems = props.taskList.filter((item) => item.status === "Todo");

  return (
    <div className="task-viewer-container">
      <ControlPanel onNewTaskAdd={props.onNewTaskAdd} />
      <div className="task-list-container">
        {todoItems.map((item) => (
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
  );
}

export default TaskViewer;
