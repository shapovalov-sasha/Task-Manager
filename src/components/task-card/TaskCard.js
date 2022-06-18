import "./TaskCard.css";

function TaskCard() {
  const taskId = "T-2";
  const taskStatus = "Todo";
  const taskName = "Create a Design System for Enum Workspace.";
  const dueDate = new Date(2022, 5, 23);

  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="task-id">{taskId}</p>
        <div className="badge">
          <p>{taskStatus}</p>
        </div>
      </div>
      <div className="card-content">
        <p>{taskName}</p>
      </div>
      <div className="card-footer">
        <div className="due-date">
          <p>Due Date</p>
          <p>{dueDate.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
