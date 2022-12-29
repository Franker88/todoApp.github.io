import React from "react";
import "../styles/TodoItem.css";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EditIcon } from "./EditIcon";

const TodoItem = (props) => {
  return (
    <li className={`TodoItem ${props.completed ? "CheckedTask" : ""}`}>
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <span className="task">{props.text}</span>
      <EditIcon onEdit={props.onEdit} />
      <DeleteIcon onDelete={props.onErase} />
    </li>
  );
};

export { TodoItem };
