import React, { useState, useContext } from "react";
import { Context } from "./context";

export default function TodoItem({ title, id, completed }) {
  const { removeTodo, toggleTodo } = useContext(Context);

  const cls = ["todo"];

  if (completed) {
    cls.push("completed");
  }

  return (
    <li className={cls.join(" ")}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <span>{title}</span>

        <i onClick={() => removeTodo(id)} className="material-icons red-text">
          delete
        </i>
      </label>
    </li>
  );
}
