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

  return (
    <AppContext.Provider
      value={{
        loading,
        error,
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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, TodoProvider };
