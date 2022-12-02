import React, { useContext } from "react";
import "../styles/CreateTodoButton.css";
import { AppContext } from "../Context/AppContext";

const CreateTodoButton = () => {
  const { openModal, setOpenModal } = useContext(AppContext);
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
