import React, { useState } from "react";
import { TodoList } from "../TodoList/Todolist";
import "./Style.scss";

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Clicked submit");
  }
}

export function Todoinput() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    setItems((pre) => [...pre, value]);
    // items.push(value)
    // console.log(items, "items-----");
    // clear
    setValue("");
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };



  return (
    <div className="input-container">
      {/* {items} */}
      <form onSubmit={Form} className="form">
        <input
          type="text"
          className="todo-input"
          placeholder="Enter a Todo.."
          value={value}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Add"
          className="todo-btn"
          onClick={submit}
        />
      </form>
      {items.map((data, index) => (
        <TodoList key={index.toString()} value={data}  items = {items} setItems = {setItems} />
      ))}
    </div>
  );
}
