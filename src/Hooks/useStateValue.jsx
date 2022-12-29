import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useStateValue = () => {
  const { item, saveItem } = useLocalStorage("TODOS_V2", []);
  const [searchValue, setSearchValue] = useState("");

  const completedItem = item.filter((todo) => !!todo.completed).length;
  const totalItem = item.length;

  let searchedItem = [];

  if (searchValue.length < 1) {
    searchedItem = item;
  } else {
    searchedItem = item.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const getItem = (id) => {
    const todoIndex = item.findIndex((todo) => todo.id === id);
    return item[todoIndex].text;
  };

  const addItem = (text) => {
    const id = newTodoId(item);
    const newItem = [...item];
    newItem.push({
      completed: false,
      text: text,
      id,
    });
    saveItem(newItem);
  };

  const newTodoId = (item) => {
    const ids = item.map((todos) => todos.id);
    const maxId = Math.max([...ids]);
    return maxId + 1;
  };

  const completeTodo = (id) => {
    const todoIndex = item.findIndex((todo) => todo.id === id);
    const newItem = [...item];
    newItem[todoIndex].completed = true;
    saveItem(newItem);
  };

  const editTodo = (id, newText) => {
    const todoIndex = item.findIndex((todo) => todo.id === id);
    const newItem = [...item];
    newItem[todoIndex].text = newText;
    saveItem(newItem);
  };

  const eraseTodo = (id) => {
    const newItem = item.filter((todo) => todo.id !== id);
    saveItem(newItem);
  };

  return {
    completedItem,
    totalItem,
    searchedItem,
    searchValue,
    setSearchValue,
    addItem,
    completeTodo,
    eraseTodo,
    editTodo,
    getItem,
  };
};

export { useStateValue };
