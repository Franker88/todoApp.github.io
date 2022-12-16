import React, { useContext } from "react";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { TodoForm } from "../Components/TodoForm";
import { CreateTodoButton } from "../Components/CreateTodoButton";
import { AppContext } from "../Context/AppContext";
import { Modal } from "../Modal/Modal";
import { TodoHeader } from "../Components/TodoHeader";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoLoading } from "../Components/TodoLoading";
import { EmptyTodos } from "../Components/EmptyTodos";
import { TodoError } from "../Components/TodoError";
import { EmptySearch } from "../Components/EmptySearch";
import { ChangeAlert } from "../Components/ChangeAlert";

const AppUI = () => {
  const {
    error,
    loading,
    totalItem,
    completedItem,
    searchedItem,
    completeTodo,
    eraseTodo,
    openModal,
    searchValue,
    setSearchValue,
  } = useContext(AppContext);

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalItem={totalItem} completedItem={completedItem} />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          //loading={loading}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalItem={totalItem}
        searchValue={searchValue}
        searchedItem={searchedItem}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmpty={() => <EmptyTodos />}
        onEmptySearch={(searchText) => <EmptySearch searchText={searchText} />}
        /*     render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onErase={() => eraseTodo(todo.text)}
          />
        )} */
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onErase={() => eraseTodo(todo.text)}
          />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton />

      <ChangeAlert />
    </React.Fragment>
  );
};

export { AppUI };
