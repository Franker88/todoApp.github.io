import { createContext } from "react";
import { useStateValue } from "../Hooks/useStateValue";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const AppContext = createContext();

const TodoProvider = (props) => {
  const { item, saveItem, loading, error } = useLocalStorage("TODOS_V2", []);
  const {
    searchValue,
    setSearchValue,
    completedItem,
    totalItem,
    searchedItem,
    addItem,
    completeTodo,
    editTodo,
    eraseTodo,
    getItem,
    openModal,
    setOpenModal,
  } = useStateValue(item, saveItem);

  const state = {
    completedItem,
    error,
    loading,
    openModal,
    searchedItem,
    totalItem,
    getItem,
  };

  const updaters = {
    addItem,
    completeTodo,
    eraseTodo,
    searchValue,
    setOpenModal,
    setSearchValue,
    editTodo,
  };

  return (
    <AppContext.Provider
      value={{
        state,
        updaters,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, TodoProvider };
