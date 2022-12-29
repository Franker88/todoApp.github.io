import React, { useContext } from "react";
import { TodoForm } from "../../Components/TodoForm";
import "../../styles/NewTodo.css";
import { AppContext } from "../../Context/AppContext";

const NewTodo = () => {
  const { updaters } = useContext(AppContext);
  const { addItem } = updaters;

  return (
    <section className="newsection">
      <div className="container">
        <TodoForm
          defaultText={""}
          label="Añadir un nuevo TODO"
          submitText="Agregar"
          submitEvent={(text) => addItem(text)}
        />
      </div>
    </section>
  );
};

export { NewTodo };
