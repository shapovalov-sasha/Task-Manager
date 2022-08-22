import React from "react";
import Badge from "../badge/Badge";
import "./TaskFilter.css";

const FilterItem = (props) => {
  return (
    <div className={`filter-item-container ${props.active && "active"}`}>
      <p className={`filter-option ${props.active && "active"}`}>
        {props.label}
      </p>
      <Badge status={props.count} />
    </div>
  );
};

export default FilterItem;
