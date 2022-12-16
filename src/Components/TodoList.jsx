import React from "react";
import "../styles/TodoList.css";

const TodoList = (props) => {
  const renderFunc = props.children || props.render;

  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalItem && props.onEmpty()}
      {!!props.totalItem &&
        !props.searchedItem.length &&
        props.onEmptySearch(props.searchValue)}

      {props.searchedItem.map(renderFunc)}
    </section>
  );
};

export { TodoList };
