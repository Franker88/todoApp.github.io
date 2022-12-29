import React, { useState } from "react";
import "../styles/TodoForm.css";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const TodoForm = (props) => {
  const navigate = useNavigate();
  const [newTask, setNewTask] = useState(props.defaultText);
  const { loading } = useLocalStorage("TODOS_V2", []);

  const onWrite = (event) => {
    setNewTask(event.target.value);
  };

  const onCancel = () => {
    navigate("/");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTask);
    navigate("/");
  };

  return (
    <form onSubmit={onSubmit} className="TodoForm">
      <label>{props.label}</label>
      <textarea
        required
        name="textTask"
        id="textTask"
        placeholder="Escribir nueva tarea..."
        value={newTask}
        onChange={onWrite}
        maxLength="45"
      ></textarea>
      <div className="buttonDiv">
        <button className="buttonCancel" type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button className="buttonAdd" type="submit" disabled={loading}>
          {props.submitText}
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
