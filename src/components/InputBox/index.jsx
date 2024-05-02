import React from 'react';
import './style.css';

export default function InputBox(props) {
    return (
        <input className="icon-search" {...props} defaultValue={ props.search } />
    )
}
