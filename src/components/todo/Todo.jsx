import React from "react"
import { FaTrashCan } from "react-icons/fa6";
import styles from './Todo.module.css'

export default function Todo({ todo, onUpdate, onDelete }) {
    const { text, status } = todo
    function handleChange(e) {
        onUpdate({
            ...todo, 
            status: e.target.checked ? 'completed' : 'active' 
        })
    }
    function handleDelete() {
        onDelete(todo)
    }
    return (
        <li className={styles.todo}>
            <input 
                className={styles.checkbox}
                type="checkbox" 
                checked={status === 'completed'} 
                onChange={handleChange}
            />
            <label className={styles.text}>{text}</label>
            <span className={styles.icon}>
                <button onClick={handleDelete} className={styles.button}><FaTrashCan /></button>
            </span>
        </li>
    )
}