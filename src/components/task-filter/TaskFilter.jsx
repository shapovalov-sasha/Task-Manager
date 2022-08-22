import React from "react";
import FilterItem from "./FilterItem";
import "./TaskFilter.css";

const taskFilterItems = [
  "All Tasks",
  "Todo",
  "In Progress",
  "Pending",
  "Completed",
];

const TaskFilter = () => {
  return (
    <div className="filter-container">
      {taskFilterItems.map((item, index) => (
        <FilterItem active={index === 0} key={item} label={item} count={3} />
      ))}
    </div>
  );
};

export default TaskFilter;
