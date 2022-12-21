import { createContext } from "react";
import { useStateValue } from "../Hooks/useStateValue";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const AppContext = createContext();

const TodoProvider = (props) => {
  const { item, saveItem, loading, error } = useLocalStorage("TODOS_V1", []);
  const {
    searchValue,
    setSearchValue,
    completedItem,
    totalItem,
    searchedItem,
    addItem,
    completeTodo,
    eraseTodo,
    openModal,
    setOpenModal,
  } = useStateValue(item, saveItem);

  const state = {
    loading,
    error,
    completedItem,
    totalItem,
    searchedItem,
    openModal,
  };

  const updaters = {
    addItem,
    completeTodo,
    eraseTodo,
    searchValue,
    setOpenModal,
    setSearchValue,
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
