import React from "react";
import "../styles/TodoLoading.css";

const TodoLoading = () => {
  return (
    <div className="LoadingTodo-container">
      <p className="LoadingTodo-text">Cargando TODOs... </p>
    </div>
  );
};

export { TodoLoading };
