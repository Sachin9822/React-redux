import React from "react";
import "./App.css";
import Input from "./components/Input";
import Todoitems from "./components/Todoitems";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

// const todoList = [
//   {
//     item: "todo 1",
//     done: false,
//     id: 322442342,
//   },
//   {
//     item: "todo 2 ",
//     done: true,
//     id: 23242242,
//   },
// ];
function App() {
  const todos = useSelector(selectTodoList);
  const check_done = (id) => {
    // settodos(
    //       todos.map((todo) =>
    //         id === todo.id ? { ...todo, done: !todo.done } : todo
    //       )
    //     );
  };
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todocontainer">
          {todos.map((items) => (
            <Todoitems
              name={items.items}
              done={items.done}
              id={items.id}
              check_todo={check_done}
            />
          ))}
        </div>
        <Input />
      </div>
      {/* todo list */}
      {/* done */}
    </div>
  );
}

export default App;
