import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [text, setText] = useState('');
    const [dueTime, setDueTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text, dueTime);
            setText('');
            setDueTime('');
        }
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task"
                className="todo-input"
            />
            <input
                type="time"
                value={dueTime}
                onChange={(e) => setDueTime(e.target.value)}
                className="time-input"
            />
            <button type="submit" className="todo-button">Add</button>
        </form>
    );
}

export default TodoForm;