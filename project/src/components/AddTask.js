import React from 'react'
import { useState } from 'react'
export const AddTask = ({ onAdd }) => {
    const onSubmit = (e) =>{
        e.preventDefault()
        if (!title){
            return
        }
        onAdd({title, isDone})
        setTitle('')
    }
    const [title, setTitle] = useState('')
    const isDone = false
    return (
        <form onSubmit={onSubmit}>
            <div>
                {/* <label>New task</label> */}
                <input type='text' placeholder='New Task' value={title} onChange={(e) => setTitle(e.target.value)} />
                <button className="save-btn">Save</button>
            </div>
        </form>
    )
}

export default AddTask
