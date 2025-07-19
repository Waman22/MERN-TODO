import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './index.css';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/todos')
            .then(res => setTodos(res.data))
            .catch(err => console.error(err));
    }, []);

    const addTodo = async (text, dueTime) => {
        try {
            const res = await axios.post('http://localhost:5000/api/todos', { text, dueTime });
            setTodos([...todos, res.data]);
        } catch (err) {
            console.error(err);
        }
    };

    const updateTodo = async (id, updatedTodo) => {
        try {
            const res = await axios.put(`http://localhost:5000/api/todos/${id}`, updatedTodo);
            setTodos(todos.map(todo => todo._id === id ? res.data : todo));
        } catch (err) {
            console.error(err);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/todos/${id}`);
            setTodos(todos.filter(todo => todo._id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container">
            <h1>To-Do App</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div>
    );
}

export default App;