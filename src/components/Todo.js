import React from 'react';

function Todo({ text }) {

    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-button"><i className="fas fa-check"></i></button>
            <button className="trash-button"><i className="fas fa-trash"></i></button>
        </div>
    );
};

export default Todo;