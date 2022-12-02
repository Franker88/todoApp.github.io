import React from "react";
import "../styles/TodoItem.css";

const TodoItem = (props) => {
  return (
    <li className={`TodoItem ${props.completed ? "CheckedTask" : ""}`}>
      <span className="check" onClick={props.onComplete}>
        √
      </span>
      <span className="task">{props.text}</span>
      <span className="cerrar" onClick={props.onErase}>
        X
      </span>
    </li>
  );
};

export { TodoItem };
