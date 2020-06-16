import React, {useReducer, useState} from 'react';
import {reducer, initialState} from '../reducers/simpleReducer'




const MVPComponent = () => { 
    

    const [state, dispatch] = useReducer(reducer, initialState);
    const [text, setText] = useState();

    return (
        <div>
            <h1>To Do List</h1>
            <form onSubmit={e => { 
                e.preventDefault();
                dispatch({type: "add-todo", payload: text})
            }}>
                <input type='text' value={text} onChange={e => setText(e.target.value)} />
            </form>
        </div>
    )
}

export default MVPComponent