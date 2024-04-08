import React from "react"
import { FaTrashCan } from "react-icons/fa6";

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
        <li>
            <input 
                type="checkbox" 
                checked={status === 'completed'} 
                onChange={handleChange}
            />
            <label>{text}</label>
            <button onClick={handleDelete}><FaTrashCan /></button>
        </li>
    )
}