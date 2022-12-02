import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import "../styles/TodoForm.css";

const TodoForm = () => {
  const [newTask, setNewTask] = useState("");
  const { addItem, setOpenModal } = useContext(AppContext);

  const onWrite = (event) => {
    setNewTask(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addItem(newTask);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit} className="TodoForm">
      <label>Escribe tu nueva tarea</label>
      <textarea
        required
        name="textTask"
        id="textTask"
        placeholder="Escribir nueva tarea..."
        value={newTask}
        onChange={onWrite}
      ></textarea>
      <div className="buttonDiv">
        <button className="buttonCancel" type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button className="buttonAdd" type="submit">
          Agregar
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
