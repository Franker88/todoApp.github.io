import React from "react";
import "../styles/TodoList.css";

const TodoList = (props) => {
  return <section className="TodoList">{props.children}</section>;
};

export { TodoList };
