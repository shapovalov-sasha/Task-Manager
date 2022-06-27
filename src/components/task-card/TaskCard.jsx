import React, { useState } from "react";
import "./TaskCard.css";
import Badge from "../badge/Badge";
import DateContainer from "../date-container/DateContainer";

function TaskCard(props) {
  const [taskId, setTaskId] = useState(props.id)

  const handleClick = () => {
    setTaskId("Clicked!")
    console.log(taskId);
  };

  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="task-id">{taskId}</p>
        <Badge status={props.status} />
      </div>
      <div className="card-content">
        <p>{props.name}</p>
      </div>
      <div className="card-footer">
        <button onClick={handleClick}>Click me!</button>
        <DateContainer date={props.dueDate} />
      </div>
    </div>
  );
}

export default TaskCard;
