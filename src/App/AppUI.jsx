import React, { useContext } from "react";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { TodoForm } from "../Components/TodoForm";
import { CreateTodoButton } from "../Components/CreateTodoButton";
import { AppContext } from "../Context/AppContext";
import { Modal } from "../Modal/Modal";

const AppUI = () => {
  const { error, loading, searchedItem, completeTodo, eraseTodo, openModal } =
    useContext(AppContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {!loading && !searchedItem.length && <p>¡Crea tu primer TODO!</p>}

        {searchedItem.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onErase={() => eraseTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton />
    </React.Fragment>
  );
};

export { AppUI };
