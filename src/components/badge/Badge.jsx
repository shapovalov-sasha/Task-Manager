import React from "react";
import "./Badge.css";

function Badge(props) {
  return (
    <div className="badge">
      <p>{props.status}</p>
    </div>
  );
}

export default Badge;
