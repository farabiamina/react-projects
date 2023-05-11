import React from 'react'
// import { FaTimes } from 'react-icons/fa'
export const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`${task.isDone ? 'taskIsDone' : 'task'}`}>
            <h3>{task.title} <button className="delete-btn" onClick={() => onDelete(task.id)}>Remove</button>
            <button className="done-btn" onClick = {() => onToggle(task.id)}>{task.isDone ? "Undone" : "Done"}</button></h3>
            <p>{task.time}</p>
            {/* <button className="done-btn" onClick = {() => onToggle(task.id)}>{task.isDone ? 'Undone' : 'Done'}</button> */}
            
        </div>
    )
}

export default Task
