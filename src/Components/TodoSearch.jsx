import React from "react";
import "../styles/TodoSearch.css";

const TodoSearch = ({ searchValue, setSearchValue, loading }) => {
  const useSearchTask = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="TodoSearch">
      <input
        placeholder="Buscar tareas..."
        value={searchValue}
        onChange={useSearchTask}
        disabled={loading}
      />
    </div>
  );
};

export { TodoSearch };
