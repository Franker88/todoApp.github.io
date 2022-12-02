import { useState } from "react";

const useStateValue = (item, saveItem) => {
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

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
  const addItem = (text) => {
    const newItem = [...item];
    newItem.push({
      completed: false,
      text: text,
    });
    saveItem(newItem);
  };

  const completeTodo = (text) => {
    const todoIndex = item.findIndex((todo) => todo.text === text);
    const newItem = [...item];
    newItem[todoIndex].completed = true;
    saveItem(newItem);
  };

  const eraseTodo = (text) => {
    const newItem = item.filter((todo) => todo.text !== text);
    saveItem(newItem);
  };

  return {
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
  };
};

export { useStateValue };
