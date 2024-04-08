import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

export default function AddTodo({ onAdd }) {
    const [text, setText] = useState('')
    function handleChange(e) {
        setText(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (text.trim() === '') return
        onAdd({ id: uuidv4(), text: text.trim(), status: 'active'})
        setText('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add Todo" value={text} onChange={handleChange}/>
            <button>Add</button>
        </form>
    )
}