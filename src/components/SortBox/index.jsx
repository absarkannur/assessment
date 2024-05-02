import React from 'react'
import './style.css';

export default function SortBox(props) {
    return (
        <select {...props} 
            value={ props.sort } >
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
        </select>
    )
}
