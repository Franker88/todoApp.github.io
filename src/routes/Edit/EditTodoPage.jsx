import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../../Components/TodoForm";
import { AppContext } from "../../Context/AppContext";
//import "../../styles/Edit.css";

const EditTodoPage = () => {
  const location = useLocation();
  const param = useParams();
  const id = Number(param.id);

  const { state, updaters } = React.useContext(AppContext);
  const { getItem } = state;
  const { editTodo } = updaters;

  let textItem;

  if (location.state.todo) {
    textItem = location.state.todo.text;
  } else {
    textItem = getItem(id);
  }

  return (
    <section className="newsection">
      <div className="container">
        <TodoForm
          defaultText={textItem}
          label="Edita tu TODO"
          submitText="Editar"
          submitEvent={(newText) => editTodo(id, newText)}
        />
      </div>
    </section>
  );
};

export { EditTodoPage };
