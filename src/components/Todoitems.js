import React from "react";
import "./Todoitems.css";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";

const Todoitems = ({ name, done, check_todo, id }) => {
  const dispatch = useDispatch();
  const handleClient = () => {
    dispatch(setCheck(id));
  };

  return (
    <div className="todoItems">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleClient}
        // onClick={() => check_todo(id)}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <p className={done && "todoItems--done"}>{name}</p>
    </div>
  );
};

export default Todoitems;
