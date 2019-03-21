import React from 'react';
// Import CSS
import './Todo.css';

function Todo(props) {
    console.log(props);
    return ( 
        <div className={`todo-container ${props.todoProp.completed ? 'todo-remove' : ''}`} onClick={() => props.toggleItem(props.todoProp.id)}>
            <h2 className="todo-text">{props.todoProp.task}</h2>
        </div>
    )
}

export default Todo