import React from 'react'
import { useState } from 'react'
import AddTodo from '../addTodo/AddTodo'
import Todo from '../todo/Todo'

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: '123', text: 'shopping', status: 'active' },
        { id: '124', text: 'study', status: 'active' }
    ])
    function handleAdd(todo) {
        setTodos([...todos, todo])
    }
    function handleUpdate(updated) {
        setTodos(todos.map(todo => todo.id === updated.id ? updated : todo))
    }
    function handleDelete(deleted) {
        setTodos(todos.filter(todo => todo.id !== deleted.id))
    }
    return (
        <section>
            <ul>
                {todos.map(item => (
                    <Todo 
                        key={item.id} 
                        todo={item} 
                        onUpdate={handleUpdate} 
                        onDelete={handleDelete}
                    >
                    </Todo>
                ))}
            </ul>
            <AddTodo onAdd={handleAdd}/>
        </section>
    )
}