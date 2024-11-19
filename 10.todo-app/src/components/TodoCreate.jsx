import React from 'react'
import '../App.css'
import { useState } from 'react'

function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState('');

    const clearInput = () => {
        setNewTodo('');
    }

    const createTodo = () => {
        if (!newTodo) return;

        const request = {
            id: Math.floor(Math.random() * 9999999),
            content: newTodo
        }

        onCreateTodo(request)
        clearInput();
    }
    return (
        <div className='todo-create'>
            <input className='todo-input' type="text" placeholder='Todo giriniz' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button className='todo-create-button' onClick={createTodo}>Todo Oluştur</button>
        </div>
    )
}

export default TodoCreate