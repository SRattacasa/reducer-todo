import React from 'react';

export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { item: action.text, completed: false}],
      };
    // case "complete-todo":
    //     return { 
    //         todos: state.todos.map((t, index) => {
    //             index === action.index ? {...t, completed: !t.completed } : t
    //         })
    //     }
    default:
      return state;
  }
};
