import React, { useState } from "react"

export default function AddTodo({ onAdd }) {
    const [text, setText] = useState('')
    function handleChange(e) {
        setText(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (text.trim() === '') return
        onAdd({ id: '', text: text.trim(), status: 'active'})
        setText('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add Todo" value={text} onChange={handleChange}/>
            <button>Add</button>
        </form>
    )
}