import { useState } from "react";
import TodoItem from "../TodoItem";
import "./style.css";
import StatusLine from "../StatusLine";

const TodoList = ({
  list,
  removeTodo,
  onClickCheckBox,
  numOfTodos,
  onClickAll,
  onClickActive,
  onClickCompleted,
  onClickClearCompleted,
  currentView,
  mode,
}) => {
  return (
    <>
      <section className="todo-list-container" id="todoListContainer">
        <section className="todo-list-scroll">
          {list.map((todo) => (
            <TodoItem
              key={todo.id}
              mode={mode}
              text={todo.value}
              id={todo.id}
              removeTodo={removeTodo}
              onClickCheckBox={onClickCheckBox}
              todo={todo}
            />
          ))}
        </section>
        <StatusLine
          onClickActive={onClickActive}
          onClickAll={onClickAll}
          onClickCompleted={onClickCompleted}
          onClickClearCompleted={onClickClearCompleted}
          numOfTodos={numOfTodos}
          currentView={currentView}
          mode={mode}
        />
      </section>
    </>
  );
};

export default TodoList;
