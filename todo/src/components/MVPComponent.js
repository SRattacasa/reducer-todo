import React, { useReducer, useState } from "react";
import { reducer, initialState } from "../reducers/simpleReducer";

const MVPComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState();

  return (
    <div>
      <h1>To Do List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD_TODO", text });
          setText("");
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>

      <div>
        {state.todos.map((todo) => (
          <div
            className="todo"
            onClick={() => {
              dispatch({ type: "TOGGLE_TODO", id: todo.id });
            }}
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
          >
            {" "}
            {todo.item}{" "}
          </div>
        ))}
        {console.log(state.todos)}
      </div>

    </div>
  );
};

export default MVPComponent;
