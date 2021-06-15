import React from 'react'

const SidebarItem = ({ name, active, handleClick }) => {
    return (
        <button 
            className={`photo_editor_sidebar-item ${active ? 'active' : ''}`}
            onClick={handleClick}
        >
            {name}
        </button>
    )
}

export default SidebarItem