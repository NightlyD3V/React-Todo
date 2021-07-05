// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
// Import CSS
import './Todo.css';

const TodoList = props => {

    return (
        <div className="task-list">
            {props.task.map((listFromMap) => (
                <Todo key={listFromMap.id} todoProp={listFromMap} toggleItem={props.toggleItem} />
            ))}
        </div>
    )
}

export default TodoList