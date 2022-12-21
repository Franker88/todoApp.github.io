import React, { useContext } from "react";
import "../styles/CreateTodoButton.css";
import { AppContext } from "../Context/AppContext";

const CreateTodoButton = () => {
  const { state, updaters } = useContext(AppContext);
  const { openModal } = state;
  const { setOpenModal } = updaters;

  const CreateTask = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="divButton">
      <button
        className={`CreateTodoButton ${openModal ? "ModalButton" : ""}`}
        onClick={CreateTask}
      >
        +
      </button>
    </div>
  );
};

export { CreateTodoButton };
