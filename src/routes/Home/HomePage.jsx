import React, { useContext } from "react";
import { TodoList } from "../../Components/TodoList";
import { TodoItem } from "../../Components/TodoItem";
import { CreateTodoButton } from "../../Components/CreateTodoButton";
import { AppContext } from "../../Context/AppContext";
import { TodoHeader } from "../../Components/TodoHeader";
import { TodoCounter } from "../../Components/TodoCounter";
import { TodoSearch } from "../../Components/TodoSearch";
import { TodoLoading } from "../../Components/TodoLoading";
import { EmptyTodos } from "../../Components/EmptyTodos";
import { TodoError } from "../../Components/TodoError";
import { EmptySearch } from "../../Components/EmptySearch";
import { ChangeAlert } from "../../Components/ChangeAlert";
import { useNavigate } from "react-router-dom";
import "../../styles/App.css";

const HomePage = () => {
  const navigate = useNavigate();
  const { state, updaters } = useContext(AppContext);

  const { loading, error, completedItem, totalItem, searchedItem } = state;
  const { completeTodo, eraseTodo, searchValue, setSearchValue } = updaters;

  return (
    <React.Fragment>
      <section className="mainsection">
        <TodoHeader loading={loading}>
          <TodoCounter totalItem={totalItem} completedItem={completedItem} />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
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
          onEmptySearch={(searchText) => (
            <EmptySearch searchText={searchText} />
          )}
        >
          {(todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.id)}
              onErase={() => eraseTodo(todo.id)}
              onEdit={() => navigate(`/edit/${todo.id}`, { state: { todo } })}
            />
          )}
        </TodoList>

        <CreateTodoButton />

        <ChangeAlert />
      </section>
    </React.Fragment>
  );
};

export { HomePage };
