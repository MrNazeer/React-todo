import React from "react";
import "./Style.scss";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
export function TodoList({ value, items, setItems }) {

console.log(items);

const del = () => {
  const list = items.filter((elements) => {
    return elements !== value
  })
  setItems(list)
};

  return (
    <>
      <li className="list">
        {value}
        <div className="wraper">
          <span>
            <AiFillDelete onClick={del} />
          </span>
          <span>
            <AiFillEdit />
          </span>
        </div>
      </li>
    </>
  );
}
