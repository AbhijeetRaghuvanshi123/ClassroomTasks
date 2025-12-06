import React from "react";

const Student = (props) => {
  return (
    <div>
      <input
        type="text"
        value={props.name}
        placeholder="Enter name"
        onChange={(e) => props.setName(e.target.value)}
      ></input>
      <p>{props.name}</p>
    </div>
  );
};

export default Student;
