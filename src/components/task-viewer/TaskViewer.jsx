import React, { useState, createContext } from "react";
import TaskCard from "../task-card/TaskCard";
import ControlPanel from "../control-panel/ControlPanel";
import EmptyListMessage from "../empty-list-message/EmptyListMessage";
import "./TaskViewer.css";

export const StatusContext = createContext();

const TaskViewer = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All Tasks");

  const displayedItems = props.taskList.filter((item) => {
    if (selectedStatus === "All Tasks") {
      return true;
    }
    return item.status === selectedStatus;
  });

  return (
    <div className="task-viewer-container">
      <StatusContext.Provider value={{ selectedStatus, setSelectedStatus }}>
        <ControlPanel
          taskList={props.taskList}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onNewTaskAdd={props.onNewTaskAdd}
        />
      </StatusContext.Provider>

      <div className="task-list-container">
        {props.taskList.length > 0 ? (
          <div className="task-list-grid">
            {displayedItems.map((item) => (
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
