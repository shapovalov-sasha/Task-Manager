import React, { useState } from "react";
import TaskCard from "../task-card/TaskCard";
import ControlPanel from "../control-panel/ControlPanel";
import EmptyListMessage from "../empty-list-message/EmptyListMessage";
import "./TaskViewer.css";

const TaskViewer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="task-viewer-container">
      <ControlPanel
        taskList={props.taskList}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onNewTaskAdd={props.onNewTaskAdd}
      />

      <div className="task-list-container">
        {props.taskList.length > 0 ? (
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
        ) : (
          <EmptyListMessage onCreateTaskClick={setIsOpen} />
        )}
      </div>
    </div>
  );
};

export default TaskViewer;
