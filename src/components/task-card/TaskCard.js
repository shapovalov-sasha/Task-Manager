import "./TaskCard.css";

function TaskCard(props) {
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="task-id">{props.id}</p>
        <div className="badge">
          <p>{props.status}</p>
        </div>
      </div>
      <div className="card-content">
        <p>{props.name}</p>
      </div>
      <div className="card-footer">
        <div className="due-date">
          <p>Due Date</p>
          <p>{props.dueDate.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
