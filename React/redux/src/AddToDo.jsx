import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./reducer/ToDoSlice.js";

const AddToDo = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  
  const handleClick = (e) => {
    e.preventDefault();
    if( inputText.length === 0) return;
    
    dispatch(addTodo(inputText));
    setInputText("");
  }
  return (
    <div>
      <input
        type="text"
        value={inputText}
        placeholder="Enter a task"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddToDo;
