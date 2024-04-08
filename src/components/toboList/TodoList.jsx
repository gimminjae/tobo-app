import React from 'react'
import { useState } from 'react'

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: '123', text: 'shopping', status: 'active' },
        { id: '124', text: 'study', status: 'active' }
    ])
    return (
        <section>
            <ul>
                {todos.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </section>
    )
}