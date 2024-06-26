import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import styles from './AddTodo.module.css'

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
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} type="text" placeholder="Add Todo" value={text} onChange={handleChange}/>
            <button className={styles.button}>Add</button>
        </form>
    )
}