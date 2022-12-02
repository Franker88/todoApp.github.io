import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "../styles/TodoSearch.css";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(AppContext);

  const useSearchTask = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="TodoSearch">
      <input
        placeholder="Buscar tareas..."
        value={searchValue}
        onChange={useSearchTask}
      />
    </div>
  );
};

export { TodoSearch };
