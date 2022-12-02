import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "../styles/TodoCounter.css";

const TodoCounter = () => {
  const { totalItem, completedItem } = useContext(AppContext);

  return (
    <h2 className="TodoCounter">
      Tareas por hacer completadas: {completedItem}/{totalItem}
    </h2>
  );
};

export { TodoCounter };
