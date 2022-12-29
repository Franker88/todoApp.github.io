import React from "react";
import "../styles/CreateTodoButton.css";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const CreateTodoButton = () => {
  const { loading } = useLocalStorage("TODOS_V2", []);
  const navigate = useNavigate();

  return (
    <div className="divButton">
      <button
        className="CreateTodoButton"
        onClick={() => navigate("/new")}
        disabled={loading}
      >
        +
      </button>
    </div>
  );
};

export { CreateTodoButton };
