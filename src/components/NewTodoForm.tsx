"use client";

import { useState } from "react";

function NewTodoForm() {
  const [state, setState] = useState("");
  return (
    <div>
      <form>
        <label htmlFor="todo-input"></label>
        <input type="text" id="todo-input" />
      </form>
    </div>
  );
}

export default NewTodoForm;
