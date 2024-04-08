import React from 'react'
import { useEffect, useState } from 'react'
import AddTodo from '../addTodo/AddTodo'
import Todo from '../todo/Todo'
import styles from './TodoList.module.css'

export default function TodoList({ filter }) {
    const [todos, setTodos] = useState(readTodosFromLocalStorage)
    function handleAdd(todo) {
        setTodos([...todos, todo])
    }
    function handleUpdate(updated) {
        setTodos(todos.map(todo => todo.id === updated.id ? updated : todo))
    }
    function handleDelete(deleted) {
        setTodos(todos.filter(todo => todo.id !== deleted.id))
    }
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    const filtered = getFilteredItems(todos, filter)
    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {filtered.map(item => (
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
function getFilteredItems(todos, filter) {
    if (filter === 'all') {
        return todos
    }
    return todos.filter(todo => todo.status === filter)
}
function readTodosFromLocalStorage() {
    const todos = localStorage.getItem('todos')
    return todos ? JSON.parse(todos) : []
}
