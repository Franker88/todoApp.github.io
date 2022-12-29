import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../Home/HomePage";
import { NewTodo } from "../New/NewTodo";
import { EditTodoPage } from "../Edit/EditTodoPage";

const AppUI = () => {
  return (
    <React.Fragment>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewTodo />} />
          <Route path="/edit/:id" element={<EditTodoPage />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </HashRouter>
    </React.Fragment>
  );
};

export { AppUI };
