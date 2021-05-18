import React, { useState } from "react";
import { useDispatch } from "react-redux";
import todoSlice, { saveTodo } from "../features/todoSlice";
import "./Input.css";

const Input = ({ id }) => {
  const [input, setinput] = useState();
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(
      saveTodo({
        items: input,
        done: false,
        id: Date.now(),
      })
    );
    setinput("");
  };
  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />

      <button type="reset" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default Input;
