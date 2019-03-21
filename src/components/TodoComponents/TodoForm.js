import React from 'react';
// Import CSS
import './Todo.css';

const TodoForm = props => {
    return (
        <form>
            <input className="todoform-input" 
                type="text"
                name="task"
                value={props.task}
                placeholder="Add new item"
                onChange={props.handleChanges}
            />
            <button className="add-button" onClick={props.updateList}>Add</button>
            <button className="remove-button" onClick={props.removeFromList}>Remove</button>
        </form>
    )
}

export default TodoForm