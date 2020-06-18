import React from 'react';

export const initialState = {
    todos: [{ 
  item: "Learn about reducers",
  completed: false,
  id: 3892987589,
    }]
};



export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
          console.log(action)
        return {
           todos: [...state.todos, {item: action.text, completed:false, id: new Date()}]
        }
      case "TOGGLE_TODO": 
          console.log(action)
          
          return  {
              todos: state.todos.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
          }
        case "CLEAR_TODOS":
            console.log(action)
            return { 
                todos: state.todos.filter(todo => !todo.completed)
            }
          
      default:
        return state;
    }
  };
  

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//         console.log(action)
//       return [
//           ...state,
//         {item: action.payload,
//         completed: false,
//         id: new Date(),}
        
//       ];
//     case "TOGGLE_TODO":
//         console.log(action)
        
//         return  [
//                 state
//         //   state.map(todo =>  
//         //       todo.id === action.id ? !todo.completed : todo
//         //   )
            
//         ]
//     default:
//       return state;
//   }
// };


// ...state,
        //     {item: action.id,
        //     completed: !state.completed}
        //     // todos: state.todos.map((t, index) => {
        //     //     index === action.index ? {...t, completed: !t.completed } : t
        //     // })
        // ]