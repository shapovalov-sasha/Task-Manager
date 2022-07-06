import React from "react";
import "./Badge.css";

const Badge = (props) => {
  const getBadgeStyle = () => {
    switch (props.status) {
      case "Todo":
        return "badge-todo";
      case "In Progress":
        return "badge-in-progress";
      case "Completed":
        return "badge-completed";
      case "Pending":
        return "badge-pending";
      default:
        return "badge-todo";
    }
  };

  return (
    <div className={`badge ${getBadgeStyle()}`}>
      <p>{props.status}</p>
    </div>
  );
};

export default Badge;
