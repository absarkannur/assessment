import React from 'react';
import InputBox from '../InputBox';
import SortBox from '../SortBox';
import './style.css';

export default function FilterBar(props) {
    return (
        <section className="animate__animated animate__fadeIn">
            <div className="filter-wrapper flex justify-evenly">
                <div className="flex-[80%] md:flex-[90%] mx-1">
                    <InputBox onChange={ props.onChangeText } search={ props.search } />
                </div>
                <div className="flex-[20%] md:flex-[10%] flex justify-center mx-1">
                    <SortBox onChange={ props.onChangeSort } sort={ props.sort } />
                </div>
            </div>
            <div className="text-[10px]">{ (props.network) ? <span style={{ color: 'green',float: 'right' }}>Online</span> : <span style={{color: 'red',float: 'right'}}>Offline</span> }</div>
        </section>
    )
}
