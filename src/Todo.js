import React from "react";
import "./todo.css";
function Todo(props) {
  return (
    <div className="todo">
      <h2>{props.text}</h2>
    </div>
  );
}

export default Todo;
