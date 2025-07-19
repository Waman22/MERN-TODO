import React, { useState } from 'react';

function TodoList({ todos, updateTodo, deleteTodo }) {
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');
    const [editDueTime, setEditDueTime] = useState('');

    const handleEdit = (todo) => {
        setEditId(todo._id);
        setEditText(todo.text);
        setEditDueTime(todo.dueTime || '');
    };

    const handleUpdate = (id) => {
        if (!editText.trim()) {
            alert('Todo text cannot be empty');
            return;
        }
        updateTodo(id, { text: editText, dueTime: editDueTime });
        setEditId(null);
        setEditText('');
        setEditDueTime('');
    };

    return (
        <ul className="space-y-2">
            {todos.map((todo) => (
                <li
                    key={todo._id}
                    className="flex items-center p-2 bg-gray-100 rounded-lg shadow-sm"
                >
                    {editId === todo._id ? (
                        <div className="flex items-center space-x-2 w-full">
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter todo text"
                                aria-label="Edit todo text"
                            />
                            <input
                                type="time"
                                value={editDueTime}
                                onChange={(e) => setEditDueTime(e.target.value)}
                                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Edit due time"
                            />
                            <button
                                onClick={() => handleUpdate(todo._id)}
                                className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Save todo"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setEditId(null)}
                                className="px-3 py-1 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                aria-label="Cancel edit"
                            >
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center w-full">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() =>
                                    updateTodo(todo._id, {
                                        completed: !todo.completed,
                                    })
                                }
                                className="h-5 w-5 text-blue-500 focus:ring-blue-500"
                                aria-label={`Mark ${todo.text} as ${
                                    todo.completed ? 'incomplete' : 'complete'
                                }`}
                            />
                            <span
                                className={`flex-1 ml-2 text-lg ${
                                    todo.completed
                                        ? 'line-through text-gray-500'
                                        : 'text-gray-800'
                                }`}
                            >
                                {todo.text}
                            </span>
                            {todo.dueTime && (
                                <span className="text-sm text-gray-500 ml-2">
                                    ({ftiDueTime(todo.dueTime)})
                                </span>
                            )}
                            <div className="ml-auto space-x-2">
                                <button
                                    onClick={() => handleEdit(todo)}
                                    className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    aria-label={`Edit ${todo.text}`}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteTodo(todo._id)}
                                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    aria-label={`Delete ${todo.text}`}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}

function ftiDueTime(dueTime) {
    if (!dueTime) return '';
    const [hours, minutes] = dueTime.split(':');
    const hoursNum = parseInt(hours, 10);
    const period = hoursNum >= 12 ? 'PM' : 'AM';
    const displayHours = hoursNum % 12 || 12;
    return `${displayHours}:${minutes} ${period}`;
}

export default TodoList;