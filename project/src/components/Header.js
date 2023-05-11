import React from 'react'

export const Header = ({onAdd, btnAdd}) => {
    return (
        <div className="header">
            <h3>Task Manager</h3>
            <button className="add-btn" onClick={onAdd}>{btnAdd ? 'Close' : 'Add'}</button>
        </div>
    )
}

export default Header