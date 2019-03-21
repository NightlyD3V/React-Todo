import React from 'react';
// Import CSS
import './Todo.css';

function Todo(props) {
    return ( 
        <div className="todo-container">
            <h2>{props.todoProp.task}</h2>
        </div>
    )
}

export default Todo