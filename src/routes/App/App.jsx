import React from "react";
import { TodoProvider } from "../../Context/AppContext";
import { AppUI } from "./AppUI";

const App = () => {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
};

export { App };
