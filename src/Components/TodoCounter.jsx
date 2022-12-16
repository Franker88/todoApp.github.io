import React from "react";
import "../styles/TodoCounter.css";

const TodoCounter = ({ totalItem, completedItem, loading }) => {
  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      Tareas por hacer completadas: {completedItem}/{totalItem}
    </h2>
  );
};

export { TodoCounter };
