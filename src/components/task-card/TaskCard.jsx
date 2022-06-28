import React, { useState } from "react";
import "./TaskCard.css";
import Badge from "../badge/Badge";
import DateContainer from "../date-container/DateContainer";

function TaskCard(props) {
  const [counter, setCounter] = useState(0)

  let nr = 0

  console.log("RENDER " + counter + " " + props.id )
  console.log("NR " + nr )

  const handleClick = () => {
    setCounter(counter + 1)
    console.log("cnt ", counter)
    nr = nr + 1;
  };

  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="task-id">{props.id}</p>
        <Badge status={props.status} />
      </div>
      <div className="card-content">
        {/* <p>{props.name}</p> */}
        <p>{counter}</p>
      </div>
      <div className="card-footer">
        <button onClick={handleClick}>INCREMENT</button>
        {/* <DateContainer date={props.dueDate} /> */}
      </div>
    </div>
  );
}

export default TaskCard;
